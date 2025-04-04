import React, { useState, useEffect } from 'react';
import { FeatureContent } from './feature-content';
import { AnimatedSocialCard } from './animated-social-card';

// Client portal features data
export const clientFeaturesData = [
  {
    id: "Instant Task Management",
    shortTitle: "Tasks",
    title: "Instant Task Management",
    icon: (
      <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
      </svg>
    ),
    description: "Easily assign and prioritize tasks with our intuitive drag-and-drop interface.",
    iconBgClass: "bg-blue-100 dark:bg-blue-900/30",
    iconColorClass: "text-blue-600 dark:text-blue-400"
  },
  {
    id: "Real-Time Progress Tracking",
    shortTitle: "Progress",
    title: "Real-Time Progress Tracking",
    icon: (
      <svg className="w-6 h-6 text-purple-600 dark:text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    description: "Monitor project status with live updates and comprehensive analytics.",
    iconBgClass: "bg-purple-100 dark:bg-purple-900/30",
    iconColorClass: "text-purple-600 dark:text-purple-400"
  },
  {
    id: "Slack Integration",
    shortTitle: "Slack",
    title: "Slack Integration",
    icon: (
      <svg className="w-6 h-6 text-indigo-600 dark:text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    ),
    description: "Seamlessly connect your communication channels for instant notifications.",
    iconBgClass: "bg-indigo-100 dark:bg-indigo-900/30",
    iconColorClass: "text-indigo-600 dark:text-indigo-400"
  },
  {
    id: "Click to Comment Feedback",
    shortTitle: "Feedback",
    title: "Click to Comment Feedback",
    icon: (
      <svg className="w-6 h-6 text-emerald-600 dark:text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5v-1a1.5 1.5 0 013 0v1m0 0V11m0-5.5a1.5 1.5 0 013 0v3m0 0V11" />
      </svg>
    ),
    description: "Clients can leave hyper-targeted feedback by clicking directly on content that needs revisions.",
    iconBgClass: "bg-emerald-100 dark:bg-emerald-900/30",
    iconColorClass: "text-emerald-600 dark:text-emerald-400"
  },
  {
    id: "Team Collaboration",
    shortTitle: "Team",
    title: "Team Collaboration",
    icon: (
      <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    description: "Scale your marketing efforts by adding your entire team to collaborate on projects with no user limits.",
    iconBgClass: "bg-blue-100 dark:bg-blue-900/30",
    iconColorClass: "text-blue-600 dark:text-blue-400"
  }
];

// Content portal features data
export const contentFeaturesData = [
  {
    id: "Generate",
    shortTitle: "Generate",
    title: "Content Generator",
    icon: (
      <svg className="w-6 h-6 text-purple-600 dark:text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    description: "Our expert team creates high-quality content tailored to your brand voice and target audience.",
    iconBgClass: "bg-purple-100 dark:bg-purple-900/30",
    iconColorClass: "text-purple-600 dark:text-purple-400"
  },
  {
    id: "Review",
    shortTitle: "Review",
    title: "Team Review",
    icon: (
      <svg className="w-6 h-6 text-violet-600 dark:text-violet-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
      </svg>
    ),
    description: "Comment directly on your content for effortless collaboration and revisions.",
    iconBgClass: "bg-violet-100 dark:bg-violet-900/30",
    iconColorClass: "text-violet-600 dark:text-violet-400"
  },
  {
    id: "Schedule",
    shortTitle: "Schedule",
    title: "Publishing Schedule",
    icon: (
      <svg className="w-6 h-6 text-pink-600 dark:text-pink-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
    description: "Plan and schedule your content across multiple platforms from a single dashboard.",
    iconBgClass: "bg-pink-100 dark:bg-pink-900/30",
    iconColorClass: "text-pink-600 dark:text-pink-400"
  },
  {
    id: "Publish",
    shortTitle: "Publish",
    title: "Social Publishing",
    icon: (
      <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
      </svg>
    ),
    description: "Publish your content to multiple social media platforms simultaneously with just one click.",
    iconBgClass: "bg-blue-100 dark:bg-blue-900/30",
    iconColorClass: "text-blue-600 dark:text-blue-400"
  },
  {
    id: "Analyze",
    shortTitle: "Analyze",
    title: "Performance Analytics",
    icon: (
      <svg className="w-6 h-6 text-amber-600 dark:text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    description: "Track engagement metrics and optimize your content strategy with real-time data insights.",
    iconBgClass: "bg-amber-100 dark:bg-amber-900/30",
    iconColorClass: "text-amber-600 dark:text-amber-400"
  }
];

// Separate Review Component to properly use hooks
function ReviewFeatureContent({ feature }: { feature: any }) {
  const [feedbackMode, setFeedbackMode] = useState(false);
  const [isApproved, setIsApproved] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  
  // Add loading state that resolves after component mounts
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);
    
    return () => clearTimeout(timer);
  }, []);
  
  const handleApproveClick = () => {
    setIsApproved(true);
    // Auto-reset after 2 seconds
    setTimeout(() => setIsApproved(false), 2000);
  };
  
  const handleReviewClick = () => {
    setFeedbackMode(!feedbackMode);
  };
  
  return (
    <FeatureContent 
      title={feature.title}
      description={feature.description}
      iconColorClass={feature.iconColorClass}
    >
      <div className="w-full px-6 pb-6 grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* How It Works - Left sidebar with steps */}
        <div className="md:col-span-1 bg-gray-800/30 rounded-lg p-4 animate-float-in-right">
          <h4 className="text-violet-400 font-semibold mb-4 flex items-center">
            <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            How It Works
          </h4>
          
          <div className="space-y-6">
            {/* Step 1 */}
            <div className="relative pl-8 group">
              <div className="absolute left-0 top-0 w-6 h-6 rounded-full bg-violet-600 flex items-center justify-center text-white font-medium text-sm group-hover:scale-110 transition-transform">1</div>
              <div className="absolute left-3 top-6 w-0.5 h-16 bg-violet-600/30 group-hover:bg-violet-500 transition-colors"></div>
              <h5 className="text-white font-medium mb-1 group-hover:text-violet-400 transition-colors">Create Content</h5>
              <p className="text-gray-400 text-sm">Design or generate content that follows your brand guidelines.</p>
            </div>
            
            {/* Step 2 */}
            <div className="relative pl-8 group">
              <div className="absolute left-0 top-0 w-6 h-6 rounded-full bg-violet-600 flex items-center justify-center text-white font-medium text-sm group-hover:scale-110 transition-transform">2</div>
              <div className="absolute left-3 top-6 w-0.5 h-16 bg-violet-600/30 group-hover:bg-violet-500 transition-colors"></div>
              <h5 className="text-white font-medium mb-1 group-hover:text-violet-400 transition-colors">Client Review</h5>
              <p className="text-gray-400 text-sm">Clients leave precise feedback directly on content elements.</p>
            </div>
            
            {/* Step 3 */}
            <div className="relative pl-8 group">
              <div className="absolute left-0 top-0 w-6 h-6 rounded-full bg-violet-600 flex items-center justify-center text-white font-medium text-sm group-hover:scale-110 transition-transform">3</div>
              <h5 className="text-white font-medium mb-1 group-hover:text-violet-400 transition-colors">Multi-Platform Publishing</h5>
              <p className="text-gray-400 text-sm">Approved content is distributed across all social media channels with one click.</p>
            </div>
          </div>
          
          {/* Platform distribution list */}
          <div className="mt-6 pt-6 border-t border-gray-700">
            <h4 className="text-white font-medium mb-2">Platforms</h4>
            <ul className="space-y-2">
              <li className="flex items-center">
                <span className="text-xs mr-2">📸</span>
                <span className="text-gray-300 text-sm">Instagram</span>
              </li>
              <li className="flex items-center">
                <span className="text-xs mr-2">✖️</span>
                <span className="text-gray-300 text-sm">X (Twitter)</span>
              </li>
              <li className="flex items-center">
                <span className="text-xs mr-2">🏢</span>
                <span className="text-gray-300 text-sm">LinkedIn Company</span>
              </li>
              <li className="flex items-center">
                <span className="text-xs mr-2">👤</span>
                <span className="text-gray-300 text-sm">LinkedIn Personal</span>
              </li>
              <li className="flex items-center">
                <span className="text-xs mr-2">+4</span>
                <span className="text-gray-300 text-sm">Additional Platforms</span>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Main animation area - Animated Social Card */}
        <div className="md:col-span-2">
          <div className="relative w-full h-96 rounded-lg overflow-hidden bg-gray-800/20">
            {/* Loading state */}
            {isLoading ? (
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-12 h-12 border-t-2 border-b-2 border-violet-500 rounded-full animate-spin"></div>
              </div>
            ) : (
              <>
                <AnimatedSocialCard feedbackMode={feedbackMode} />
                
                {/* Feedback mode indicator */}
                {feedbackMode && (
                  <div className="absolute top-4 left-4 bg-blue-600 text-white text-xs font-medium px-2 py-1 rounded-full animate-ping-once">
                    Review Mode Active
                  </div>
                )}

                {/* Success indicator - shows briefly when approved */}
                {isApproved && (
                  <div className="absolute inset-0 flex items-center justify-center bg-black/40 z-30">
                    <div className="bg-white rounded-lg p-4 shadow-lg animate-ping-once">
                      <div className="flex items-center text-green-600">
                        <svg className="w-6 h-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="font-medium">Content Approved!</span>
                      </div>
                      <p className="text-gray-600 text-sm mt-1">Publishing to all platforms...</p>
                    </div>
                  </div>
                )}
                
                {/* Interactive controls */}
                <div className="absolute bottom-0 left-0 right-0 bg-gray-900/80 backdrop-blur-sm p-4 flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <button 
                      className={`${isApproved ? 'bg-green-700' : 'bg-green-600 hover:bg-green-700'} text-white rounded-md px-4 py-2 text-sm transition-colors flex items-center`}
                      onClick={handleApproveClick}
                      disabled={isApproved}
                    >
                      <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {isApproved ? 'Approved!' : 'Approve'}
                    </button>
                    
                    <button 
                      className={`${feedbackMode ? 'bg-blue-600' : 'bg-gray-700 hover:bg-gray-600'} text-white rounded-md px-4 py-2 text-sm transition-colors flex items-center`}
                      onClick={handleReviewClick}
                    >
                      <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                      </svg>
                      {feedbackMode ? 'Exit Review' : 'Review'}
                    </button>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <button className="text-gray-400 hover:text-gray-200 transition-colors">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                      </svg>
                    </button>
                    <span className="text-white text-sm">1/5</span>
                    <button className="text-gray-400 hover:text-gray-200 transition-colors">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </FeatureContent>
  );
}

// Render client feature content based on active feature
export const renderClientFeatureContent = (activeFeature: string | null) => {
  if (!activeFeature) return null;

  // Team Collaboration content
  if (activeFeature === "Team Collaboration") {
    return (
      <FeatureContent 
        title="Team Collaboration" 
        description="Scale your marketing efforts by adding your entire team to collaborate on projects with no user limits."
        gradientFrom="blue"
        gradientTo="indigo"
      >
        <div className="w-full px-6 pb-6">
          <div className="relative w-full aspect-video flex items-center justify-center overflow-hidden rounded-lg">
            <video 
              src="/Invite-team-members.mp4"
              className="w-full h-full object-cover rounded-lg transform hover:scale-105 transition-transform duration-500"
              autoPlay
              loop
              muted
              playsInline
              controlsList="nodownload"
              onContextMenu={(e) => e.preventDefault()}
            ></video>
            
            {/* Interactive overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-indigo-500/10 hover:opacity-0 transition-opacity duration-300">
              <div className="absolute bottom-4 right-4 bg-blue-500 text-white p-2 rounded-full cursor-pointer transform hover:scale-110 transition-transform">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </FeatureContent>
    );
  }
  
  // Click to Comment Feedback content
  if (activeFeature === "Click to Comment Feedback") {
    return (
      <FeatureContent 
        title="Click to Comment Feedback" 
        description="Clients can leave hyper-targeted feedback by clicking directly on content that needs revisions."
        gradientFrom="emerald"
        gradientTo="teal"
      >
        <div className="w-full px-6 pb-6">
          <div className="relative w-full aspect-video flex items-center justify-center overflow-hidden rounded-lg">
            <video 
              src="/client-portal-review-collaboration.mp4"
              className="w-full h-full object-cover rounded-lg transform hover:scale-105 transition-transform duration-500"
              autoPlay
              loop
              muted
              playsInline
              controlsList="nodownload"
              onContextMenu={(e) => e.preventDefault()}
            ></video>
            
            {/* Interactive overlay */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-emerald-500/10 to-teal-500/10 hover:opacity-0 transition-opacity duration-300"></div>
              
              {/* Comment indicators */}
              <div className="absolute top-1/4 left-1/3 bg-emerald-500 text-white p-1 rounded-full cursor-pointer transform hover:scale-125 transition-transform animate-pulse">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                </svg>
              </div>
              
              <div className="absolute bottom-1/3 right-1/4 bg-teal-500 text-white p-1 rounded-full cursor-pointer transform hover:scale-125 transition-transform animate-pulse">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </FeatureContent>
    );
  }

  // Render simplified content for other features
  const feature = clientFeaturesData.find(f => f.id === activeFeature);
  if (feature) {
    return (
      <FeatureContent 
        title={feature.title} 
        description={feature.description}
        gradientFrom={feature.id === "Instant Task Management" ? "blue" : 
                     feature.id === "Real-Time Progress Tracking" ? "purple" : 
                     feature.id === "Slack Integration" ? "indigo" : "blue"}
        gradientTo={feature.id === "Instant Task Management" ? "sky" : 
                   feature.id === "Real-Time Progress Tracking" ? "violet" : 
                   feature.id === "Slack Integration" ? "purple" : "indigo"}
      >
        <div className="w-full px-6 pb-6 flex items-center justify-center">
          <div className="p-8 text-center">
            <div className={`${feature.iconBgClass} p-4 rounded-full mx-auto mb-4 w-16 h-16 flex items-center justify-center`}>
              <div className="w-10 h-10">{feature.icon}</div>
            </div>
            <h3 className="text-white text-lg font-semibold mb-2">{feature.title}</h3>
            <p className="text-gray-400">{feature.description}</p>
          </div>
        </div>
      </FeatureContent>
    );
  }
  
  return null;
};

// Render content feature content based on active feature
export const renderContentFeatureContent = (activeFeature: string | null) => {
  if (!activeFeature) return null;

  const feature = contentFeaturesData.find(f => f.id === activeFeature);
  if (!feature) return null;

  // Review feature content
  if (activeFeature === "Review") {
    return <ReviewFeatureContent feature={feature} />;
  }

  // Generate content
  if (activeFeature === "Generate") {
    return (
      <FeatureContent 
        title={feature.title}
        description={feature.description}
        iconColorClass={feature.iconColorClass}
      >
        <div className="w-full px-6 pb-6 grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* How It Works - Left sidebar with steps */}
          <div className="md:col-span-1 bg-gray-800/30 rounded-lg p-4 animate-float-in-right">
            <h4 className="text-purple-400 font-semibold mb-4 flex items-center">
              <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              How It Works
            </h4>
            
            <div className="space-y-6">
              {/* Step 1 */}
              <div className="relative pl-8 group">
                <div className="absolute left-0 top-0 w-6 h-6 rounded-full bg-purple-600 flex items-center justify-center text-white font-medium text-sm group-hover:scale-110 transition-transform">1</div>
                <div className="absolute left-3 top-6 w-0.5 h-16 bg-purple-600/30 group-hover:bg-purple-500 transition-colors"></div>
                <h5 className="text-white font-medium mb-1 group-hover:text-purple-400 transition-colors">Input Your Brief</h5>
                <p className="text-gray-400 text-sm">Tell us your content needs, target audience, and brand voice.</p>
              </div>
              
              {/* Step 2 */}
              <div className="relative pl-8 group">
                <div className="absolute left-0 top-0 w-6 h-6 rounded-full bg-purple-600 flex items-center justify-center text-white font-medium text-sm group-hover:scale-110 transition-transform">2</div>
                <div className="absolute left-3 top-6 w-0.5 h-16 bg-purple-600/30 group-hover:bg-purple-500 transition-colors"></div>
                <h5 className="text-white font-medium mb-1 group-hover:text-purple-400 transition-colors">AI Generation</h5>
                <p className="text-gray-400 text-sm">Our AI creates tailored content that matches your brand voice.</p>
              </div>
              
              {/* Step 3 */}
              <div className="relative pl-8 group">
                <div className="absolute left-0 top-0 w-6 h-6 rounded-full bg-purple-600 flex items-center justify-center text-white font-medium text-sm group-hover:scale-110 transition-transform">3</div>
                <h5 className="text-white font-medium mb-1 group-hover:text-purple-400 transition-colors">Review & Refine</h5>
                <p className="text-gray-400 text-sm">Provide feedback to perfect your content with just a few clicks.</p>
              </div>
            </div>
          </div>
          
          {/* Main animation area - Right content */}
          <div className="md:col-span-2">
            <div className="relative w-full rounded-lg bg-gray-800/50 p-6 overflow-hidden animate-fade-in-up h-full">
              <div className="absolute top-2 right-2 z-10">
                <div className="flex space-x-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
              </div>
              
              <div className="relative z-0 pt-4">
                {/* Command input area */}
                <div className="bg-gray-900 rounded-t-lg p-4 border border-purple-500/20">
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="w-10 h-10 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center animate-pulse">
                      {feature.icon}
                    </div>
                    <div className="flex-1">
                      <div className="text-purple-400 font-medium">AI Content Generator</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center bg-black/30 border border-gray-700 rounded-lg p-2">
                    <input 
                      type="text" 
                      readOnly 
                      value="Create engaging social media post about new product launch" 
                      className="bg-transparent border-none text-white text-sm flex-1 focus:outline-none" 
                    />
                    <button className="bg-purple-600 hover:bg-purple-700 text-white rounded-md px-3 py-1 text-sm transition-colors animate-pulse">
                      Generate
                    </button>
                  </div>
                </div>
                
                {/* Generated content preview */}
                <div className="bg-gray-900/50 rounded-b-lg p-4 border border-t-0 border-purple-500/20">
                  <div className="space-y-4">
                    <div className="flex items-center space-x-2">
                      <div className="animate-typing-cursor text-white">Generating content...</div>
                      <svg className="w-5 h-5 text-purple-400 animate-spin" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                    </div>
                    
                    <div className="text-gray-300 animate-fade-in-up" style={{animationDelay: '1s'}}>
                      <div className="p-4 border border-purple-500/30 rounded-lg bg-black/20">
                        <h3 className="font-semibold mb-2">🚀 Exciting News! Our New Product is Here!</h3>
                        <p className="text-sm opacity-0 animate-fade-in-up" style={{animationDelay: '1.5s'}}>
                          We're thrilled to announce the launch of our revolutionary new product that will transform how you [benefit]. Designed with you in mind, it features [key feature] that helps you [solve problem].
                        </p>
                        <p className="text-sm mt-2 opacity-0 animate-fade-in-up" style={{animationDelay: '2s'}}>
                          🔥 Early bird special: Get 15% off when you order within the next 48 hours! Link in bio. #ProductLaunch #Innovation
                        </p>
                      </div>
                    </div>
                    
                    <div className="pt-2 flex justify-between items-center opacity-0 animate-fade-in-up" style={{animationDelay: '2.5s'}}>
                      <div className="flex space-x-2">
                        <button className="bg-purple-600/20 hover:bg-purple-600/30 text-purple-400 rounded-md px-3 py-1 text-xs transition-colors flex items-center">
                          <svg className="w-3 h-3 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                          </svg>
                          Edit
                        </button>
                        <button className="bg-purple-600/20 hover:bg-purple-600/30 text-purple-400 rounded-md px-3 py-1 text-xs transition-colors flex items-center">
                          <svg className="w-3 h-3 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                          </svg>
                          Regenerate
                        </button>
                      </div>
                      <button className="bg-green-600 hover:bg-green-700 text-white rounded-md px-3 py-1 text-xs transition-colors flex items-center">
                        <svg className="w-3 h-3 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        Approve
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </FeatureContent>
    );
  }

  // Schedule content
  if (activeFeature === "Schedule") {
    return (
      <FeatureContent 
        title={feature.title}
        description={feature.description}
        iconColorClass={feature.iconColorClass}
      >
        <div className="w-full px-6 pb-6 grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* How It Works - Left sidebar with steps */}
          <div className="md:col-span-1 bg-gray-800/30 rounded-lg p-4 animate-float-in-right">
            <h4 className="text-pink-400 font-semibold mb-4 flex items-center">
              <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              How It Works
            </h4>
            
            <div className="space-y-6">
              {/* Step 1 */}
              <div className="relative pl-8 group">
                <div className="absolute left-0 top-0 w-6 h-6 rounded-full bg-pink-600 flex items-center justify-center text-white font-medium text-sm group-hover:scale-110 transition-transform">1</div>
                <div className="absolute left-3 top-6 w-0.5 h-16 bg-pink-600/30 group-hover:bg-pink-500 transition-colors"></div>
                <h5 className="text-white font-medium mb-1 group-hover:text-pink-400 transition-colors">Select Platforms</h5>
                <p className="text-gray-400 text-sm">Choose which social media platforms you want to publish to.</p>
              </div>
              
              {/* Step 2 */}
              <div className="relative pl-8 group">
                <div className="absolute left-0 top-0 w-6 h-6 rounded-full bg-pink-600 flex items-center justify-center text-white font-medium text-sm group-hover:scale-110 transition-transform">2</div>
                <div className="absolute left-3 top-6 w-0.5 h-16 bg-pink-600/30 group-hover:bg-pink-500 transition-colors"></div>
                <h5 className="text-white font-medium mb-1 group-hover:text-pink-400 transition-colors">Set Schedule</h5>
                <p className="text-gray-400 text-sm">Choose optimal posting times or use our AI-recommended slots.</p>
              </div>
              
              {/* Step 3 */}
              <div className="relative pl-8 group">
                <div className="absolute left-0 top-0 w-6 h-6 rounded-full bg-pink-600 flex items-center justify-center text-white font-medium text-sm group-hover:scale-110 transition-transform">3</div>
                <h5 className="text-white font-medium mb-1 group-hover:text-pink-400 transition-colors">Queue & Forget</h5>
                <p className="text-gray-400 text-sm">Content is automatically published at your scheduled times.</p>
              </div>
            </div>
          </div>
          
          {/* Main animation area - Right content */}
          <div className="md:col-span-2">
            <div className="relative w-full rounded-lg bg-gray-800/50 p-6 overflow-hidden h-full">
              <div className="bg-gray-900 rounded-lg p-4 border border-pink-500/20">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-white font-medium">Publishing Schedule</h3>
                  <div className="flex items-center text-sm">
                    <button className="text-pink-400 flex items-center hover:text-pink-300 transition-colors">
                      <svg className="w-4 h-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      Add New Post
                    </button>
                  </div>
                </div>
                
                <div className="grid grid-cols-7 gap-2 mb-6">
                  {['M', 'T', 'W', 'T', 'F', 'S', 'S'].map((day, i) => (
                    <div key={day} 
                      className={`flex items-center justify-center h-8 rounded-md text-sm animate-float-in-up ${i < 5 ? 'bg-pink-500/20 text-pink-400' : 'bg-gray-800 text-gray-400'}`}
                      style={{ animationDelay: `${i * 0.1}s` }}
                    >
                      {day}
                    </div>
                  ))}
                </div>
                
                <div className="space-y-4">
                  {[
                    { time: '11:00 AM', platform: 'LinkedIn', title: 'Industry Insights', active: true },
                    { time: '1:30 PM', platform: 'Instagram', title: 'Product Showcase', active: false },
                    { time: '5:00 PM', platform: 'Twitter', title: 'Quick Tips', active: true },
                  ].map((slot, i) => (
                    <div key={i} className="relative group">
                      <div 
                        className={`flex items-center space-x-3 p-3 rounded-lg border animate-float-in-up ${
                          slot.active 
                            ? 'bg-pink-500/10 border-pink-500/30' 
                            : 'bg-gray-800/50 border-gray-700'
                        }`}
                        style={{ animationDelay: `${(i + 7) * 0.1}s` }}
                      >
                        <div className="w-12 text-sm text-gray-400">{slot.time}</div>
                        <div className={`w-6 h-6 rounded-full flex items-center justify-center ${
                          slot.platform === 'LinkedIn' ? 'bg-blue-600' : 
                          slot.platform === 'Twitter' ? 'bg-sky-500' :
                          slot.platform === 'Instagram' ? 'bg-pink-600' : 'bg-gray-600'
                        }`}>
                          {slot.platform === 'LinkedIn' && (
                            <svg className="w-3.5 h-3.5 text-white" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                            </svg>
                          )}
                          {slot.platform === 'Twitter' && (
                            <svg className="w-3.5 h-3.5 text-white" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                            </svg>
                          )}
                          {slot.platform === 'Instagram' && (
                            <svg className="w-3.5 h-3.5 text-white" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                            </svg>
                          )}
                        </div>
                        <div className="flex-1">
                          <div className="text-sm text-white font-medium">{slot.title}</div>
                          <div className="text-xs text-gray-400">Scheduled for {slot.platform}</div>
                        </div>
                        <div className="text-gray-400 hover:text-pink-400 transition-colors cursor-pointer">
                          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                          </svg>
                        </div>
                      </div>
                      
                      {/* Platform indicator animation */}
                      {slot.active && (
                        <div className="absolute -left-1 top-1/2 w-2 h-8 bg-pink-500 rounded-l-md transform -translate-y-1/2 animate-pulse"></div>
                      )}
                    </div>
                  ))}
                </div>
                
                <button className="mt-4 text-white bg-pink-600 hover:bg-pink-700 px-4 py-2 rounded-lg text-sm font-medium transition-colors w-full flex items-center justify-center animate-float-in-up" style={{animationDelay: '1s'}}>
                  <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  View Full Calendar
                </button>
              </div>
            </div>
          </div>
        </div>
      </FeatureContent>
    );
  }

  // Publish content
  if (activeFeature === "Publish") {
    return (
      <FeatureContent 
        title={feature.title}
        description={feature.description}
        iconColorClass={feature.iconColorClass}
      >
        <div className="w-full px-6 pb-6 grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* How It Works - Left sidebar with steps */}
          <div className="md:col-span-1 bg-gray-800/30 rounded-lg p-4 animate-float-in-right">
            <h4 className="text-blue-400 font-semibold mb-4 flex items-center">
              <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              How It Works
            </h4>
            
            <div className="space-y-6">
              {/* Step 1 */}
              <div className="relative pl-8 group">
                <div className="absolute left-0 top-0 w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center text-white font-medium text-sm group-hover:scale-110 transition-transform">1</div>
                <div className="absolute left-3 top-6 w-0.5 h-16 bg-blue-600/30 group-hover:bg-blue-500 transition-colors"></div>
                <h5 className="text-white font-medium mb-1 group-hover:text-blue-400 transition-colors">Connect Accounts</h5>
                <p className="text-gray-400 text-sm">Link your social media accounts with a few clicks.</p>
              </div>
              
              {/* Step 2 */}
              <div className="relative pl-8 group">
                <div className="absolute left-0 top-0 w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center text-white font-medium text-sm group-hover:scale-110 transition-transform">2</div>
                <div className="absolute left-3 top-6 w-0.5 h-16 bg-blue-600/30 group-hover:bg-blue-500 transition-colors"></div>
                <h5 className="text-white font-medium mb-1 group-hover:text-blue-400 transition-colors">Customize Posts</h5>
                <p className="text-gray-400 text-sm">Tailor content for each platform automatically.</p>
              </div>
              
              {/* Step 3 */}
              <div className="relative pl-8 group">
                <div className="absolute left-0 top-0 w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center text-white font-medium text-sm group-hover:scale-110 transition-transform">3</div>
                <h5 className="text-white font-medium mb-1 group-hover:text-blue-400 transition-colors">One-Click Publish</h5>
                <p className="text-gray-400 text-sm">Publish to all platforms simultaneously with a single click.</p>
              </div>
            </div>
          </div>
          
          {/* Main animation area - Right content */}
          <div className="md:col-span-2">
            <div className="relative w-full rounded-lg bg-gray-800/50 p-6 overflow-hidden h-full">
              <div className="bg-gray-900 rounded-lg border border-blue-500/20 overflow-hidden">
                {/* Tabs Navigation */}
                <div className="flex border-b border-gray-700">
                  <button className="flex-1 py-3 text-blue-400 border-b-2 border-blue-500 text-sm font-medium">Ready to Publish</button>
                  <button className="flex-1 py-3 text-gray-400 hover:text-gray-300 text-sm font-medium transition-colors">Published</button>
                  <button className="flex-1 py-3 text-gray-400 hover:text-gray-300 text-sm font-medium transition-colors">Analytics</button>
                </div>
                
                {/* Content Preview */}
                <div className="p-4">
                  <div className="mb-4 animate-float-in-up">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-white font-medium">Product Launch Announcement</h3>
                      <span className="text-xs bg-blue-500/20 text-blue-400 px-2 py-1 rounded-full">All Platforms</span>
                    </div>
                    
                    <div className="bg-gray-800 rounded-lg p-4 border border-gray-700">
                      <p className="text-gray-300 text-sm mb-3">We're excited to announce our new product line launching next week! Join us for the virtual unveiling event. 🚀 #ProductLaunch #Innovation</p>
                      
                      <div className="relative aspect-video bg-gray-900 rounded-lg overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 flex items-center justify-center">
                          <svg className="w-16 h-16 text-white opacity-50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Connected Platforms */}
                  <div className="mt-6">
                    <h4 className="text-white text-sm font-medium mb-3">Publishing to:</h4>
                    <div className="grid grid-cols-2 gap-3">
                      {[
                        { id: 'linkedin', name: 'LinkedIn', color: 'blue', icon: 'M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z' },
                        { id: 'twitter', name: 'Twitter', color: 'sky', icon: 'M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z' },
                        { id: 'instagram', name: 'Instagram', color: 'pink', icon: 'M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.403-2.759-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z' },
                        { id: 'facebook', name: 'Facebook', color: 'indigo', icon: 'M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z' }
                      ].map((platform) => (
                        <div key={platform.id} 
                          className={`flex items-center p-3 rounded-lg border border-${platform.color}-500/30 bg-${platform.color}-500/10 animate-float-in-up`}
                          style={{ animationDelay: `${platform.id === 'linkedin' ? 0.1 : platform.id === 'twitter' ? 0.2 : platform.id === 'instagram' ? 0.3 : 0.4}s` }}
                        >
                          <div className={`w-8 h-8 rounded-full bg-${platform.color}-600 flex items-center justify-center mr-3`}>
                            <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                              <path d={platform.icon} />
                            </svg>
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center justify-between">
                              <span className="text-white text-sm font-medium">{platform.name}</span>
                              <span className={`w-2 h-2 rounded-full bg-green-500 animate-pulse`}></span>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Action buttons */}
                  <div className="mt-6 flex space-x-3 animate-float-in-up" style={{animationDelay: '0.6s'}}>
                    <button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white rounded-lg py-2 font-medium transition-colors flex items-center justify-center">
                      <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                      </svg>
                      Publish Now
                    </button>
                    <button className="flex-1 bg-gray-700 hover:bg-gray-600 text-white rounded-lg py-2 font-medium transition-colors flex items-center justify-center">
                      <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      Schedule
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </FeatureContent>
    );
  }

  // Analyze content
  if (activeFeature === "Analyze") {
    return (
      <FeatureContent 
        title={feature.title}
        description={feature.description}
        iconColorClass={feature.iconColorClass}
      >
        <div className="w-full px-6 pb-6 grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* How It Works - Left sidebar with steps */}
          <div className="md:col-span-1 bg-gray-800/30 rounded-lg p-4 animate-float-in-right">
            <h4 className="text-amber-400 font-semibold mb-4 flex items-center">
              <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              How It Works
            </h4>
            
            <div className="space-y-6">
              {/* Step 1 */}
              <div className="relative pl-8 group">
                <div className="absolute left-0 top-0 w-6 h-6 rounded-full bg-amber-600 flex items-center justify-center text-white font-medium text-sm group-hover:scale-110 transition-transform">1</div>
                <div className="absolute left-3 top-6 w-0.5 h-16 bg-amber-600/30 group-hover:bg-amber-500 transition-colors"></div>
                <h5 className="text-white font-medium mb-1 group-hover:text-amber-400 transition-colors">Auto-Collection</h5>
                <p className="text-gray-400 text-sm">Analytics data is automatically collected across all platforms.</p>
              </div>
              
              {/* Step 2 */}
              <div className="relative pl-8 group">
                <div className="absolute left-0 top-0 w-6 h-6 rounded-full bg-amber-600 flex items-center justify-center text-white font-medium text-sm group-hover:scale-110 transition-transform">2</div>
                <div className="absolute left-3 top-6 w-0.5 h-16 bg-amber-600/30 group-hover:bg-amber-500 transition-colors"></div>
                <h5 className="text-white font-medium mb-1 group-hover:text-amber-400 transition-colors">Unified Dashboard</h5>
                <p className="text-gray-400 text-sm">See all your metrics in one centralized, customizable dashboard.</p>
              </div>
              
              {/* Step 3 */}
              <div className="relative pl-8 group">
                <div className="absolute left-0 top-0 w-6 h-6 rounded-full bg-amber-600 flex items-center justify-center text-white font-medium text-sm group-hover:scale-110 transition-transform">3</div>
                <h5 className="text-white font-medium mb-1 group-hover:text-amber-400 transition-colors">AI Insights</h5>
                <p className="text-gray-400 text-sm">Get actionable recommendations based on performance data.</p>
              </div>
            </div>
          </div>
          
          {/* Main animation area - Right content */}
          <div className="md:col-span-2">
            <div className="relative w-full rounded-lg bg-gray-800/50 overflow-hidden animate-fade-in-up h-full">
              <div className="absolute top-0 left-0 w-full h-12 bg-gray-900 flex items-center px-4 border-b border-gray-700">
                <div className="flex-1 flex items-center">
                  <div className="w-3 h-3 rounded-full bg-violet-500 mr-2 animate-pulse"></div>
                  <span className="text-white text-sm font-medium">Content Review - Social Media Post #42</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 rounded-full bg-violet-800/50 flex items-center justify-center">
                    <svg className="w-4 h-4 text-violet-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                    </svg>
                  </div>
                  <div className="w-6 h-6 rounded-full overflow-hidden bg-gray-600">
                    <div className="w-full h-full bg-gradient-to-br from-violet-400 to-purple-600"></div>
                  </div>
                </div>
              </div>
              
              <div className="pt-16 px-6 pb-6">
                <div className="bg-gray-900/50 p-5 rounded-lg mb-4 relative">
                  <h3 className="text-white font-semibold text-lg">New Product Launch Announcement</h3>
                  <p className="text-gray-300 mt-2 text-sm relative group">
                    We're excited to announce the launch of our innovative new product line that will revolutionize the industry.
                    <span className="absolute top-0 right-0 opacity-0 group-hover:opacity-100 transition-opacity">
                      <button className="bg-violet-500/20 hover:bg-violet-500/30 text-violet-400 rounded-full p-1 text-xs">
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                        </svg>
                      </button>
                    </span>
                  </p>
                  <p className="text-gray-300 mt-2 text-sm relative group">
                    The new features include advanced technology, user-friendly interfaces, and exceptional performance.
                    <span className="absolute top-0 right-0 opacity-0 group-hover:opacity-100 transition-opacity">
                      <button className="bg-violet-500/20 hover:bg-violet-500/30 text-violet-400 rounded-full p-1 text-xs">
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                        </svg>
                      </button>
                    </span>
                  </p>
                  <div className="relative mt-3 text-sm text-gray-300 group">
                    <p className="bg-violet-500/10 border-l-2 border-violet-500 pl-3 py-1">
                      Contact us today to learn more about how our products can transform your business.
                    </p>
                    <div className="absolute -left-2 top-1/2 transform -translate-y-1/2 w-5 h-5 bg-violet-500 rounded-full flex items-center justify-center animate-pulse">
                      <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                      </svg>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gray-900/30 rounded-lg p-4 animate-float-in-up" style={{animationDelay: '0.3s'}}>
                  <div className="flex items-start mb-3">
                    <div className="w-8 h-8 rounded-full overflow-hidden flex-shrink-0 mr-3">
                      <div className="w-full h-full bg-gradient-to-br from-pink-400 to-purple-600"></div>
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between">
                        <h4 className="text-white text-sm font-medium">Sarah Johnson</h4>
                        <span className="text-gray-500 text-xs">2m ago</span>
                      </div>
                      <div className="bg-gray-800 rounded-lg p-3 mt-2 text-sm text-gray-300">
                        <p>Can we be more specific about what features are included? Maybe list the top 3 most impressive ones.</p>
                      </div>
                      <div className="flex items-center mt-2 space-x-3 text-xs">
                        <button className="text-violet-400 hover:text-violet-300 transition-colors">Reply</button>
                        <button className="text-violet-400 hover:text-violet-300 transition-colors">Resolve</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </FeatureContent>
    );
  }

  // Review feature content
  if (activeFeature === "Review") {
    return <ReviewFeatureContent feature={feature} />;
  }

  // Default content for other features
  return (
    <FeatureContent 
      title={feature.title}
      description={feature.description}
      iconColorClass={feature.iconColorClass}
    >
      <div className="w-full px-6 pb-6 animate-fade-in-up">
        <div className="flex items-center justify-center">
          <div className={`${feature.iconBgClass} p-4 rounded-full mx-auto mb-4 w-16 h-16 flex items-center justify-center animate-float-in-up`}>
            <div className="w-10 h-10">{feature.icon}</div>
          </div>
        </div>
      </div>
    </FeatureContent>
  );
}; 