"use client";

import React, { useState } from 'react';

const tabContentStyles = {
  clientHidden: "opacity-0 translate-x-20 absolute",
  clientVisible: "opacity-100 translate-x-0",
  contentHidden: "opacity-0 -translate-x-20 absolute",
  contentVisible: "opacity-100 translate-x-0"
};

export function FeatureSetSection() {
  const [activeTab, setActiveTab] = useState('client');
  const [activeFeature, setActiveFeature] = useState<string | null>("Team Collaboration");

  const handleFeatureClick = (featureTitle: string) => {
    setActiveFeature(featureTitle === activeFeature ? null : featureTitle);
  };

  return (
    <section className="w-full py-16 md:py-24 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
            Two Portals, One Powerful Platform
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
            Seamlessly integrate your marketing workflow with our dual-portal system,
            designed for both client collaboration and content strategy.
          </p>
          
          {/* Tab selector */}
          <div className="inline-flex bg-gray-100 dark:bg-gray-800 p-1 rounded-full">
            <button
              onClick={() => setActiveTab('client')}
              className={`px-6 py-2 rounded-full font-medium text-sm transition-all duration-300 ${
                activeTab === 'client' 
                  ? 'bg-white dark:bg-gray-700 shadow-md' 
                  : 'text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300'
              }`}
            >
              Client Portal
            </button>
            <button
              onClick={() => setActiveTab('content')}
              className={`px-6 py-2 rounded-full font-medium text-sm transition-all duration-300 ${
                activeTab === 'content' 
                  ? 'bg-white dark:bg-gray-700 shadow-md' 
                  : 'text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300'
              }`}
            >
              Content Portal
            </button>
          </div>
        </div>
        
        {/* Tab content */}
        <div className="max-w-6xl mx-auto">
          {/* Client Portal Features */}
          <div 
            className={`transition-all duration-500 transform ${
              activeTab === 'client' ? tabContentStyles.clientVisible : tabContentStyles.clientHidden
            } ${activeTab === 'client' ? 'block' : 'hidden'}`}
          >
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden">
              <div className="md:grid md:grid-cols-2">
                <div className="p-8 md:p-12">
                  <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Client Portal</h3>
                  
                  <div className="space-y-6">
                    {/* Feature 1 - Task Management */}
                    <div 
                      className={`flex items-start p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors cursor-pointer group ${
                        activeFeature === "Instant Task Management" ? "bg-gray-50 dark:bg-gray-700" : ""
                      }`}
                      onClick={() => handleFeatureClick("Instant Task Management")}
                    >
                      <div className="flex-shrink-0 bg-blue-100 dark:bg-blue-900/30 p-3 rounded-lg">
                        <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                        </svg>
                      </div>
                      <div className="ml-4">
                        <div className="flex items-center">
                          <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Instant Task Management</h4>
                          <svg className="w-4 h-4 ml-2 text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                          </svg>
                        </div>
                        <p className="mt-2 text-gray-600 dark:text-gray-400">Easily assign and prioritize tasks with our intuitive drag-and-drop interface.</p>
                      </div>
                    </div>
                    
                    {/* Feature 2 - Progress Tracking */}
                    <div 
                      className={`flex items-start p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors cursor-pointer group ${
                        activeFeature === "Real-Time Progress Tracking" ? "bg-gray-50 dark:bg-gray-700" : ""
                      }`}
                      onClick={() => handleFeatureClick("Real-Time Progress Tracking")}
                    >
                      <div className="flex-shrink-0 bg-purple-100 dark:bg-purple-900/30 p-3 rounded-lg">
                        <svg className="w-6 h-6 text-purple-600 dark:text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                        </svg>
                      </div>
                      <div className="ml-4">
                        <div className="flex items-center">
                          <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Real-Time Progress Tracking</h4>
                          <svg className="w-4 h-4 ml-2 text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                          </svg>
                        </div>
                        <p className="mt-2 text-gray-600 dark:text-gray-400">Monitor project status with live updates and comprehensive analytics.</p>
                      </div>
                    </div>
                    
                    {/* Feature 3 - Slack Integration */}
                    <div 
                      className={`flex items-start p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors cursor-pointer group ${
                        activeFeature === "Slack Integration" ? "bg-gray-50 dark:bg-gray-700" : ""
                      }`}
                      onClick={() => handleFeatureClick("Slack Integration")}
                    >
                      <div className="flex-shrink-0 bg-indigo-100 dark:bg-indigo-900/30 p-3 rounded-lg">
                        <svg className="w-6 h-6 text-indigo-600 dark:text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                        </svg>
                      </div>
                      <div className="ml-4">
                        <div className="flex items-center">
                          <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Slack Integration</h4>
                          <svg className="w-4 h-4 ml-2 text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                          </svg>
                        </div>
                        <p className="mt-2 text-gray-600 dark:text-gray-400">Seamlessly connect your communication channels for instant notifications.</p>
                      </div>
                    </div>
                    
                    {/* Feature 4 - Click to Comment Feedback */}
                    <div 
                      className={`flex items-start p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors cursor-pointer group ${
                        activeFeature === "Click to Comment Feedback" ? "bg-gray-50 dark:bg-gray-700" : ""
                      }`}
                      onClick={() => handleFeatureClick("Click to Comment Feedback")}
                    >
                      <div className="flex-shrink-0 bg-emerald-100 dark:bg-emerald-900/30 p-3 rounded-lg">
                        <svg className="w-6 h-6 text-emerald-600 dark:text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5v-1a1.5 1.5 0 013 0v1m0 0V11m0-5.5a1.5 1.5 0 013 0v3m0 0V11" />
                        </svg>
                      </div>
                      <div className="ml-4">
                        <div className="flex items-center">
                          <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Click to Comment Feedback</h4>
                          <svg className="w-4 h-4 ml-2 text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                          </svg>
                        </div>
                        <p className="mt-2 text-gray-600 dark:text-gray-400">Clients can leave hyper-targeted feedback by clicking directly on content that needs revisions.</p>
                      </div>
                    </div>
                    
                    {/* Feature 5 - Team Collaboration */}
                    <div 
                      className={`flex items-start p-3 rounded-lg border-2 border-blue-500 hover:bg-blue-50 dark:hover:bg-blue-900/30 transition-colors cursor-pointer group ${
                        activeFeature === "Team Collaboration" ? "bg-blue-50 dark:bg-blue-900/30" : ""
                      }`}
                      onClick={() => handleFeatureClick("Team Collaboration")}
                    >
                      <div className="flex-shrink-0 bg-blue-100 dark:bg-blue-900/30 p-3 rounded-lg">
                        <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                      </div>
                      <div className="ml-4">
                        <div className="flex items-center">
                          <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Team Collaboration</h4>
                          <svg className="w-4 h-4 ml-2 text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                          </svg>
                        </div>
                        <p className="mt-2 text-gray-600 dark:text-gray-400">Scale your marketing efforts by adding your entire team to collaborate on projects with no user limits.</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gradient-to-br from-gray-950 via-blue-950 to-purple-950 dark:bg-gradient-to-br dark:from-black dark:via-blue-950/70 dark:to-purple-950/70 p-8 md:p-12 flex items-center justify-center">
                  {/* Show team collaboration video when Team Collaboration feature is active */}
                  {activeTab === 'client' && activeFeature === "Team Collaboration" ? (
                    <div className="relative w-full h-full flex items-center justify-center">
                      <div className="rounded-lg overflow-hidden shadow-white/50 drop-shadow-[0_0_8px_rgba(255,255,255,0.5)] w-full max-w-lg 
                      relative before:absolute before:inset-0 before:rounded-lg before:content-[''] before:z-0 before:animate-border-glow before:bg-[linear-gradient(115deg,#ff00cc,#3399ff,#33ff00,#ffff00,#ff00cc)] before:bg-[length:200%_200%] before:p-[2px] before:-m-[2px]">
                        <video 
                          src="/Invite-team-members.mp4"
                          className="w-full h-auto relative z-10 rounded-lg"
                          autoPlay
                          loop
                          muted
                          playsInline
                          controlsList="nodownload"
                          onContextMenu={(e) => e.preventDefault()}
                        ></video>
                      </div>
                    </div>
                  ) : activeTab === 'client' && activeFeature === "Click to Comment Feedback" ? (
                    <div className="relative w-full h-full flex items-center justify-center">
                      <div className="rounded-lg overflow-hidden shadow-white/50 drop-shadow-[0_0_8px_rgba(255,255,255,0.5)] w-full max-w-lg 
                      relative before:absolute before:inset-0 before:rounded-lg before:content-[''] before:z-0 before:animate-border-glow before:bg-[linear-gradient(115deg,#ff00cc,#3399ff,#33ff00,#ffff00,#ff00cc)] before:bg-[length:200%_200%] before:p-[2px] before:-m-[2px]">
                        <video 
                          src="/client-portal-review-collaboration.mp4"
                          className="w-full h-auto relative z-10 rounded-lg"
                          autoPlay
                          loop
                          muted
                          playsInline
                          controlsList="nodownload"
                          onContextMenu={(e) => e.preventDefault()}
                        ></video>
                      </div>
                    </div>
                  ) : (
                    <div className="relative w-full max-w-md">
                      {/* Default animated illustration placeholder */}
                      <div className="rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 p-1">
                        <div className="bg-white dark:bg-gray-800 rounded-md p-4 h-64 flex items-center justify-center">
                          <div className="w-full space-y-3">
                            <div className="w-full h-6 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                              <div className="bg-blue-500 h-full w-2/3 rounded-full animate-pulse"></div>
                            </div>
                            <div className="w-full h-6 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                              <div className="bg-purple-500 h-full w-1/2 rounded-full animate-pulse animation-delay-500"></div>
                            </div>
                            <div className="w-full h-6 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                              <div className="bg-indigo-500 h-full w-3/4 rounded-full animate-pulse animation-delay-1000"></div>
                            </div>
                            <div className="w-full h-6 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                              <div className="bg-emerald-500 h-full w-1/3 rounded-full animate-pulse animation-delay-1500"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
          
          {/* Content Portal Features */}
          <div 
            className={`transition-all duration-500 transform ${
              activeTab === 'content' ? tabContentStyles.contentVisible : tabContentStyles.contentHidden
            } ${activeTab === 'content' ? 'block' : 'hidden'}`}
          >
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden">
              <div className="md:grid md:grid-cols-2">
                <div className="p-8 md:p-12">
                  <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Content Portal</h3>
                  
                  <div className="space-y-6">
                    {/* Content Feature 1 */}
                    <div 
                      className={`flex items-start p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors cursor-pointer group ${
                        activeFeature === "Content Upload & Approval" ? "bg-gray-50 dark:bg-gray-700" : ""
                      }`}
                      onClick={() => handleFeatureClick("Content Upload & Approval")}
                    >
                      <div className="flex-shrink-0 bg-pink-100 dark:bg-pink-900/30 p-3 rounded-lg">
                        <svg className="w-6 h-6 text-pink-600 dark:text-pink-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                        </svg>
                      </div>
                      <div className="ml-4">
                        <div className="flex items-center">
                          <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Content Upload & Approval</h4>
                          <svg className="w-4 h-4 ml-2 text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                          </svg>
                        </div>
                        <p className="mt-2 text-gray-600 dark:text-gray-400">Streamlined workflow for uploading, reviewing, and approving content assets.</p>
                      </div>
                    </div>
                    
                    {/* Content Feature 2 */}
                    <div 
                      className={`flex items-start p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors cursor-pointer group ${
                        activeFeature === "Post Scheduling & Calendar View" ? "bg-gray-50 dark:bg-gray-700" : ""
                      }`}
                      onClick={() => handleFeatureClick("Post Scheduling & Calendar View")}
                    >
                      <div className="flex-shrink-0 bg-teal-100 dark:bg-teal-900/30 p-3 rounded-lg">
                        <svg className="w-6 h-6 text-teal-600 dark:text-teal-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <div className="ml-4">
                        <div className="flex items-center">
                          <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Post Scheduling & Calendar View</h4>
                          <svg className="w-4 h-4 ml-2 text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                          </svg>
                        </div>
                        <p className="mt-2 text-gray-600 dark:text-gray-400">Visually plan your content strategy with our intuitive calendar interface.</p>
                      </div>
                    </div>
                    
                    {/* Content Feature 3 */}
                    <div 
                      className={`flex items-start p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors cursor-pointer group ${
                        activeFeature === "Audience Engagement Metrics" ? "bg-gray-50 dark:bg-gray-700" : ""
                      }`}
                      onClick={() => handleFeatureClick("Audience Engagement Metrics")}
                    >
                      <div className="flex-shrink-0 bg-amber-100 dark:bg-amber-900/30 p-3 rounded-lg">
                        <svg className="w-6 h-6 text-amber-600 dark:text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <div className="ml-4">
                        <div className="flex items-center">
                          <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Audience Engagement Metrics</h4>
                          <svg className="w-4 h-4 ml-2 text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                          </svg>
                        </div>
                        <p className="mt-2 text-gray-600 dark:text-gray-400">Detailed analytics to measure and improve your content&apos;s performance.</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gradient-to-br from-gray-950 via-blue-950 to-purple-950 dark:bg-gradient-to-br dark:from-black dark:via-blue-950/70 dark:to-purple-950/70 p-8 md:p-12 flex items-center justify-center">
                  {/* Always display the calendar visualization for Content Portal */}
                  <div className="relative w-full max-w-md">
                    <div className="rounded-lg bg-gradient-to-br from-pink-500 to-amber-500 p-1">
                      <div className="bg-white dark:bg-gray-800 rounded-md p-4 h-64">
                        <div className="grid grid-cols-7 gap-1 text-center mb-2">
                          {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((day, i) => (
                            <div key={i} className="text-xs font-medium text-gray-500">{day}</div>
                          ))}
                        </div>
                        <div className="grid grid-cols-7 gap-1">
                          {Array.from({ length: 30 }).map((_, i) => {
                            const isActive = [3, 8, 12, 17, 22, 25].includes(i);
                            return (
                              <div 
                                key={i} 
                                className={`aspect-square rounded-md flex items-center justify-center text-xs font-medium ${
                                  isActive 
                                    ? 'bg-gradient-to-br from-pink-500 to-amber-500 text-white shadow-md transform hover:scale-110 transition-transform cursor-pointer'
                                    : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300'
                                }`}
                              >
                                {i + 1}
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 