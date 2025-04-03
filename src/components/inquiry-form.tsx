"use client";

import { useState } from 'react';

interface FormData {
  firstName: string;
  lastName: string;
  company: string;
  email: string;
}

export function InquiryForm() {
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    company: '',
    email: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [hasConsent, setHasConsent] = useState(false);
  const [formStatus, setFormStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleConsent = () => {
    setHasConsent(prev => !prev);
  };

  const validateForm = () => {
    if (!formData.firstName.trim()) return 'First name is required';
    if (!formData.lastName.trim()) return 'Last name is required';
    if (!formData.email.trim()) return 'Email is required';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) return 'Please enter a valid email address';
    if (!hasConsent) return 'Please provide consent to proceed';
    return '';
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const validationError = validateForm();
    if (validationError) {
      setErrorMessage(validationError);
      setFormStatus('error');
      return;
    }

    setIsSubmitting(true);
    setFormStatus('idle');
    
    try {
      console.log('Starting form submission...');
      
      // 1. First authenticate with the API
      console.log('Authenticating with API...');
      const authResponse = await fetch('https://app.mailsoftly.com/api/v3/authentication', {
        method: 'POST',
        headers: {
          'Authorization': '6118e8243f7582f7d2852ac6ba954775ac4358c6',
          'Content-Type': 'application/json'
        }
      });

      if (!authResponse.ok) {
        console.error('Authentication failed:', await authResponse.text());
        throw new Error('Authentication failed');
      }
      
      console.log('Authentication successful');

      // 2. Create or update contact
      console.log('Creating/updating contact...');
      const contactResponse = await fetch('https://app.mailsoftly.com/api/v3/create_or_update_contact', {
        method: 'POST',
        headers: {
          'Authorization': '6118e8243f7582f7d2852ac6ba954775ac4358c6',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          first_name: formData.firstName,
          last_name: formData.lastName,
          email: formData.email,
          company: formData.company
        })
      });

      if (!contactResponse.ok) {
        console.error('Failed to create contact:', await contactResponse.text());
        throw new Error('Failed to create contact');
      }

      const contactData = await contactResponse.json();
      console.log('Contact created/updated:', contactData);
      const contactId = contactData.contact.id;

      // 3. Get the contact list ID for "Technology Landing Page Inquiry"
      console.log('Fetching contact lists...');
      const listsResponse = await fetch('https://app.mailsoftly.com/api/v3/get_contact_lists', {
        method: 'GET',
        headers: {
          'Authorization': '6118e8243f7582f7d2852ac6ba954775ac4358c6'
        }
      });

      if (!listsResponse.ok) {
        console.error('Failed to fetch contact lists:', await listsResponse.text());
        throw new Error('Failed to fetch contact lists');
      }

      const lists = await listsResponse.json();
      console.log('Available lists:', lists);
      
      let targetList = lists.find((list: { id: number; name: string }) => 
        list.name === 'Technology Landing Page Inquiry'
      );
      
      console.log('Found target list?', !!targetList, targetList);

      // If the list doesn't exist, create it
      if (!targetList) {
        console.log('Contact list not found, creating a new one');
        const createListResponse = await fetch('https://app.mailsoftly.com/api/v3/create_contact_list', {
          method: 'POST',
          headers: {
            'Authorization': '6118e8243f7582f7d2852ac6ba954775ac4358c6',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            name: 'Technology Landing Page Inquiry'
          })
        });

        if (!createListResponse.ok) {
          console.error('Failed to create contact list:', await createListResponse.text());
          throw new Error('Failed to create contact list');
        }

        const newList = await createListResponse.json();
        console.log('Created new list:', newList);
        
        // Format may be different from the get lists response
        targetList = {
          id: newList.id || newList.contact_list_id,
          name: 'Technology Landing Page Inquiry'
        };
        
        // Verify the list was created by fetching all lists again
        const verifyListsResponse = await fetch('https://app.mailsoftly.com/api/v3/get_contact_lists', {
          method: 'GET',
          headers: {
            'Authorization': '6118e8243f7582f7d2852ac6ba954775ac4358c6'
          }
        });
        
        if (verifyListsResponse.ok) {
          const updatedLists = await verifyListsResponse.json();
          console.log('Updated lists after creation:', updatedLists);
          const verifiedList = updatedLists.find((list: { id: number; name: string }) => 
            list.name === 'Technology Landing Page Inquiry'
          );
          
          if (verifiedList) {
            targetList = verifiedList;
          }
        }
      }

      // 4. Add contact to the list
      console.log(`Adding contact ${contactId} to list ${targetList.id}...`);
      const addToListResponse = await fetch(`https://app.mailsoftly.com/api/v3/add_contact_to_contact_list?contact_list_id=${targetList.id}&contact_id=${contactId}`, {
        method: 'POST',
        headers: {
          'Authorization': '6118e8243f7582f7d2852ac6ba954775ac4358c6'
        }
      });
      
      if (!addToListResponse.ok) {
        console.error('Failed to add contact to list:', await addToListResponse.text());
        throw new Error(`Failed to add contact to list. Status: ${addToListResponse.status}`);
      }
      
      console.log('Contact added to list');

      // 5. Assign tags to the contact
      console.log('Assigning tags to contact...');
      await fetch('https://app.mailsoftly.com/api/v3/assign_tags_to_contact', {
        method: 'POST',
        headers: {
          'Authorization': '6118e8243f7582f7d2852ac6ba954775ac4358c6',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          contact_id: contactId,
          tags: [
            {
              tag_name: 'technology page inquiry',
              tag_color: '#00FF00'
            },
            {
              tag_name: 'test',
              tag_color: '#0000FF'
            }
          ]
        })
      });

      setFormStatus('success');
      setFormData({
        firstName: '',
        lastName: '',
        company: '',
        email: ''
      });
      setHasConsent(false);
    } catch (error) {
      console.error('Error submitting form:', error);
      setFormStatus('error');
      setErrorMessage(error instanceof Error ? error.message : 'An unknown error occurred');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full max-w-md mx-auto bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden transform transition-all hover:shadow-xl">
      <div className="p-6">
        <h3 className="text-2xl font-bold text-center mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
          Get Started Today
        </h3>
        
        {formStatus === 'success' ? (
          <div className="text-center space-y-4">
            <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto">
              <svg className="w-8 h-8 text-green-600 dark:text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <p className="text-gray-800 dark:text-gray-200 font-medium">Thank you for your inquiry!</p>
            <p className="text-gray-600 dark:text-gray-400 text-sm">We'll get back to you shortly.</p>
            <div className="btn-rainbow-shadow-wrapper rounded-md inline-block">
              <button
                onClick={() => setFormStatus('idle')}
                className="relative mt-4 px-6 py-2 bg-gray-100 dark:bg-gray-700 rounded-md text-gray-800 dark:text-gray-200 font-medium hover:bg-gray-200 dark:hover:bg-gray-600 transition-all duration-300 btn-rainbow-shadow"
              >
                Submit Another Inquiry
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            {formStatus === 'error' && (
              <div className="bg-red-50 dark:bg-red-900/20 text-red-800 dark:text-red-300 p-3 rounded-md text-sm">
                {errorMessage}
              </div>
            )}
            
            <div>
              <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                First Name *
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent dark:bg-gray-700 dark:text-white"
                placeholder="John"
                required
              />
            </div>
            
            <div>
              <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Last Name *
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent dark:bg-gray-700 dark:text-white"
                placeholder="Doe"
                required
              />
            </div>
            
            <div>
              <label htmlFor="company" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Company
              </label>
              <input
                type="text"
                id="company"
                name="company"
                value={formData.company}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent dark:bg-gray-700 dark:text-white"
                placeholder="Acme Inc."
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Email Address *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent dark:bg-gray-700 dark:text-white"
                placeholder="john.doe@example.com"
                required
              />
            </div>
            
            <div className="flex items-start">
              <div className="flex items-center h-5">
                <input
                  id="consent"
                  name="consent"
                  type="checkbox"
                  checked={hasConsent}
                  onChange={handleConsent}
                  className="w-4 h-4 border border-gray-300 dark:border-gray-600 rounded focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 dark:bg-gray-700"
                  required
                />
              </div>
              <div className="ml-3 text-sm">
                <label htmlFor="consent" className="font-medium text-gray-700 dark:text-gray-300">
                  I consent to receive marketing communications.
                </label>
                <p className="text-gray-500 dark:text-gray-400 text-xs mt-1">
                  <button 
                    type="button" 
                    className="text-blue-500 dark:text-blue-400 hover:underline focus:outline-none"
                    onClick={() => window.open('/privacy-policy', '_blank')}
                  >
                    Revisit consent
                  </button>
                </p>
              </div>
            </div>
            
            <div className="btn-rainbow-shadow-wrapper rounded-md w-full">
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full relative px-4 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-md text-white font-medium transition-all duration-300 btn-rainbow-shadow ${
                  isSubmitting 
                    ? 'opacity-70 cursor-not-allowed' 
                    : 'hover:from-blue-600 hover:to-purple-700 transform hover:scale-[1.02]'
                }`}
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Processing...
                  </span>
                ) : (
                  'Submit Inquiry'
                )}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
} 