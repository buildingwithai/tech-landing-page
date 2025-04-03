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
    // Always set the clicked feature as active, don't toggle off when clicking the same one
    setActiveFeature(featureTitle);
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
            <div className="btn-rainbow-shadow-wrapper rounded-full">
              <button
                onClick={() => setActiveTab('client')}
                className={`relative px-6 py-2 rounded-full font-medium text-sm transition-all duration-300 btn-rainbow-shadow ${
                  activeTab === 'client' 
                    ? 'bg-white dark:bg-gray-700 shadow-md' 
                    : 'text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300'
                }`}
              >
                Client Portal
              </button>
            </div>
            <div className="btn-rainbow-shadow-wrapper rounded-full ml-1">
              <button
                onClick={() => setActiveTab('content')}
                className={`relative px-6 py-2 rounded-full font-medium text-sm transition-all duration-300 btn-rainbow-shadow ${
                  activeTab === 'content' 
                    ? 'bg-white dark:bg-gray-700 shadow-md' 
                    : 'text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300'
                }`}
              >
                Content Portal
              </button>
            </div>
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
                  {/* Team Collaboration feature */}
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
                  ) : activeTab === 'client' && activeFeature === "Instant Task Management" ? (
                    <div className="relative w-full h-full flex items-center justify-center">
                      <div className="rounded-lg overflow-hidden shadow-white/50 drop-shadow-[0_0_8px_rgba(255,255,255,0.5)] w-full max-w-lg 
                      relative before:absolute before:inset-0 before:rounded-lg before:content-[''] before:z-0 before:animate-border-glow before:bg-[linear-gradient(115deg,#3399ff,#00a3ff,#0066ff,#00a3ff,#3399ff)] before:bg-[length:200%_200%] before:p-[2px] before:-m-[2px]">
                        {/* Enhanced Interactive Kanban Board Animation */}
                        <div className="w-full h-64 bg-gray-900 dark:bg-black rounded-lg p-4 relative z-10">
                          <div className="h-8 mb-3 flex items-center justify-between">
                            <div className="h-5 w-1/3 bg-blue-500 rounded-md"></div>
                            <div className="flex gap-2">
                              <div className="h-6 w-6 rounded-full bg-blue-600 animate-pulse"></div>
                              <div className="h-6 w-6 rounded-full bg-green-600 animate-pulse animation-delay-200"></div>
                            </div>
                          </div>
                          
                          {/* Kanban Board */}
                          <div className="grid grid-cols-3 gap-2 h-[calc(100%-2.75rem)]">
                            {/* To-Do Column */}
                            <div className="flex flex-col bg-gray-800 rounded-md p-2">
                              <div className="text-xs font-semibold text-gray-400 mb-2 border-b border-gray-700 pb-1">TO-DO</div>
                              <div className="space-y-2 overflow-hidden">
                                <div className="h-12 bg-gray-700 border-l-4 border-gray-500 rounded-md p-2 flex flex-col justify-center">
                                  <div className="h-2 w-3/4 bg-gray-500 rounded-sm"></div>
                                  <div className="h-2 w-1/2 bg-gray-600 rounded-sm mt-1"></div>
                                </div>
                                <div className="h-12 bg-gray-700 border-l-4 border-gray-500 rounded-md p-2 flex flex-col justify-center">
                                  <div className="h-2 w-2/3 bg-gray-500 rounded-sm"></div>
                                  <div className="h-2 w-1/3 bg-gray-600 rounded-sm mt-1"></div>
                                </div>
                              </div>
                            </div>
                            
                            {/* In Progress Column */}
                            <div className="flex flex-col bg-gray-800 rounded-md p-2">
                              <div className="text-xs font-semibold text-yellow-400 mb-2 border-b border-gray-700 pb-1">IN-PROGRESS</div>
                              <div className="space-y-2 overflow-hidden relative">
                                {/* Card being dragged - animated */}
                                <div className="absolute left-0 top-0 h-12 w-full bg-blue-900 border-l-4 border-blue-500 rounded-md p-2 flex flex-col justify-center transform animate-float-card z-10">
                                  <div className="h-2 w-3/4 bg-blue-700 rounded-sm"></div>
                                  <div className="h-2 w-1/2 bg-blue-800 rounded-sm mt-1"></div>
                                </div>
                                
                                {/* Visible cards */}
                                <div className="h-12 bg-yellow-900/30 border-l-4 border-yellow-500 rounded-md p-2 flex flex-col justify-center">
                                  <div className="h-2 w-4/5 bg-yellow-700/50 rounded-sm"></div>
                                  <div className="h-2 w-3/5 bg-yellow-800/50 rounded-sm mt-1"></div>
                                </div>
                                <div className="h-12 opacity-40 bg-gray-700 border-l-4 border-gray-500 rounded-md p-2 flex flex-col justify-center mt-2">
                                  <div className="h-2 w-3/4 bg-gray-500 rounded-sm"></div>
                                  <div className="h-2 w-2/5 bg-gray-600 rounded-sm mt-1"></div>
                                </div>
                              </div>
                            </div>
                            
                            {/* Done Column */}
                            <div className="flex flex-col bg-gray-800 rounded-md p-2">
                              <div className="text-xs font-semibold text-green-400 mb-2 border-b border-gray-700 pb-1">COMPLETED</div>
                              <div className="space-y-2 overflow-hidden">
                                <div className="h-12 bg-green-900/30 border-l-4 border-green-500 rounded-md p-2 flex flex-col justify-center group hover:bg-green-900/40 transition-colors duration-300">
                                  <div className="h-2 w-2/3 bg-green-700/50 rounded-sm group-hover:bg-green-600/60 transition-colors duration-300"></div>
                                  <div className="h-2 w-1/2 bg-green-800/50 rounded-sm mt-1 group-hover:bg-green-700/60 transition-colors duration-300"></div>
                                </div>
                                <div className="h-12 bg-green-900/30 border-l-4 border-green-500 rounded-md p-2 flex flex-col justify-center group hover:bg-green-900/40 transition-colors duration-300">
                                  <div className="h-2 w-3/4 bg-green-700/50 rounded-sm group-hover:bg-green-600/60 transition-colors duration-300"></div>
                                  <div className="h-2 w-3/5 bg-green-800/50 rounded-sm mt-1 group-hover:bg-green-700/60 transition-colors duration-300"></div>
                                </div>
                              </div>
                            </div>
                          </div>
                          
                          {/* Task count badges that pulse occasionally */}
                          <div className="absolute top-4 right-4 flex gap-2">
                            <div className="flex items-center justify-center h-5 w-5 rounded-full bg-blue-600 text-[10px] text-white font-medium animate-pulse animation-delay-400">
                              2
                            </div>
                            <div className="flex items-center justify-center h-5 w-5 rounded-full bg-yellow-500 text-[10px] text-white font-medium animate-pulse animation-delay-600">
                              3
                            </div>
                            <div className="flex items-center justify-center h-5 w-5 rounded-full bg-green-500 text-[10px] text-white font-medium animate-pulse animation-delay-200">
                              2
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : activeTab === 'client' && activeFeature === "Real-Time Progress Tracking" ? (
                    <div className="relative w-full h-full flex items-center justify-center">
                      <div className="rounded-lg overflow-hidden shadow-white/50 drop-shadow-[0_0_8px_rgba(255,255,255,0.5)] w-full max-w-lg 
                      relative before:absolute before:inset-0 before:rounded-lg before:content-[''] before:z-0 before:animate-border-glow before:bg-[linear-gradient(115deg,#8b5cf6,#a855f7,#d946ef,#a855f7,#8b5cf6)] before:bg-[length:200%_200%] before:p-[2px] before:-m-[2px]">
                        {/* Progress Tracking Animation */}
                        <div className="w-full h-64 bg-white dark:bg-gray-800 rounded-lg p-4 relative z-10">
                          <div className="h-8 mb-4 flex items-center justify-between">
                            <div className="h-4 w-1/4 bg-purple-500 rounded-md"></div>
                            <div className="flex gap-2">
                              <div className="h-6 w-6 rounded-full bg-purple-200"></div>
                              <div className="h-6 w-6 rounded-full bg-purple-200"></div>
                            </div>
                          </div>
                          <div className="space-y-4">
                            {/* Project progress bars */}
                            <div className="space-y-1">
                              <div className="flex justify-between text-xs text-gray-600 dark:text-gray-400">
                                <span>Competitor Battlecard</span>
                                <span className="animate-pulse">78%</span>
                              </div>
                              <div className="h-2 w-full bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                                <div className="h-full bg-purple-500 rounded-full w-[78%]"></div>
                              </div>
                            </div>
                            <div className="space-y-1">
                              <div className="flex justify-between text-xs text-gray-600 dark:text-gray-400">
                                <span>Sales Enablement Deck</span>
                                <span className="animate-pulse animation-delay-200">45%</span>
                              </div>
                              <div className="h-2 w-full bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                                <div className="h-full bg-blue-500 rounded-full w-[45%]"></div>
                              </div>
                            </div>
                            <div className="space-y-1">
                              <div className="flex justify-between text-xs text-gray-600 dark:text-gray-400">
                                <span>Product Messaging</span>
                                <span className="animate-pulse animation-delay-400">92%</span>
                              </div>
                              <div className="h-2 w-full bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                                <div className="h-full bg-green-500 rounded-full w-[92%]"></div>
                              </div>
                            </div>
                            <div className="space-y-1">
                              <div className="flex justify-between text-xs text-gray-600 dark:text-gray-400">
                                <span>Customer Case Study</span>
                                <span className="animate-pulse animation-delay-600">23%</span>
                              </div>
                              <div className="h-2 w-full bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                                <div className="h-full bg-amber-500 rounded-full w-[23%]"></div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : activeTab === 'client' && activeFeature === "Slack Integration" ? (
                    <div className="relative w-full h-full flex items-center justify-center">
                      <div className="rounded-lg overflow-hidden shadow-white/50 drop-shadow-[0_0_8px_rgba(255,255,255,0.5)] w-full max-w-lg 
                      relative before:absolute before:inset-0 before:rounded-lg before:content-[''] before:z-0 before:animate-border-glow before:bg-[linear-gradient(115deg,#4f46e5,#6366f1,#818cf8,#6366f1,#4f46e5)] before:bg-[length:200%_200%] before:p-[2px] before:-m-[2px]">
                        {/* Slack Integration Animation */}
                        <div className="w-full h-64 bg-white dark:bg-gray-800 rounded-lg p-4 relative z-10">
                          <div className="h-8 mb-4 flex items-center">
                            <div className="h-6 w-6 bg-indigo-500 rounded mr-2 flex items-center justify-center">
                              <svg viewBox="0 0 24 24" className="w-4 h-4 text-white" fill="currentColor">
                                <path d="M6 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm0 3a6 6 0 1 1 0-12 6 6 0 0 1 0 12Zm12-6a3 3 0 1 0-6 0 3 3 0 006 0Zm3 0a6 6 0 1 1-12 0 6 6 0 0 1 12 0Z" />
                              </svg>
                            </div>
                            <div className="h-4 w-1/4 bg-indigo-500 rounded-md"></div>
                          </div>
                          <div className="space-y-3">
                            {/* Slack Message Conversation */}
                            <div className="flex items-start space-x-2 mb-3">
                              <div className="flex-shrink-0 h-8 w-8 rounded-full bg-gray-200 flex items-center justify-center">
                                <span className="text-xs font-medium text-gray-600">AR</span>
                              </div>
                              <div>
                                <div className="text-xs text-gray-500">Alex Rodriguez</div>
                                <div className="bg-gray-100 dark:bg-gray-700 p-2 rounded-lg text-sm">
                                  <div className="h-3 w-32 bg-gray-300 dark:bg-gray-600 rounded"></div>
                                  <div className="h-3 w-40 bg-gray-300 dark:bg-gray-600 rounded mt-1"></div>
                                </div>
                              </div>
                            </div>
                            
                            {/* GTM LABS Notification - Animation */}
                            <div className="flex items-start space-x-2 animate-fade-in-down">
                              <div className="flex-shrink-0 h-8 w-8 rounded-full bg-indigo-100 dark:bg-indigo-900 flex items-center justify-center">
                                <span className="text-xs font-medium text-indigo-600 dark:text-indigo-400">JT</span>
                              </div>
                              <div>
                                <div className="text-xs text-gray-500">Jovanny from GTM LABS</div>
                                <div className="bg-indigo-100 dark:bg-indigo-900/50 p-2 rounded-lg text-sm">
                                  <div className="flex items-center space-x-2">
                                    <div className="h-4 w-4 bg-green-500 rounded-full"></div>
                                    <div className="h-3 w-48 bg-indigo-200 dark:bg-indigo-800 rounded"></div>
                                  </div>
                                  <div className="h-3 w-32 bg-indigo-200 dark:bg-indigo-800 rounded mt-1"></div>
                                </div>
                              </div>
                            </div>
                            
                            {/* New message typing animation */}
                            <div className="flex items-center space-x-2 mt-3">
                              <div className="flex-shrink-0 h-6 w-6 rounded-full bg-green-100 flex items-center justify-center">
                                <span className="text-xs font-medium text-green-600">TS</span>
                              </div>
                              <div className="flex gap-1">
                                <div className="h-2 w-2 bg-gray-400 rounded-full animate-bounce"></div>
                                <div className="h-2 w-2 bg-gray-400 rounded-full animate-bounce animation-delay-200"></div>
                                <div className="h-2 w-2 bg-gray-400 rounded-full animate-bounce animation-delay-400"></div>
                              </div>
                            </div>
                          </div>
                        </div>
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
                        activeFeature === "AI Content Generation" ? "bg-gray-50 dark:bg-gray-700" : ""
                      }`}
                      onClick={() => handleFeatureClick("AI Content Generation")}
                    >
                      <div className="flex-shrink-0 bg-pink-100 dark:bg-pink-900/30 p-3 rounded-lg">
                        <svg className="w-6 h-6 text-pink-600 dark:text-pink-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                        </svg>
                      </div>
                      <div className="ml-4">
                        <div className="flex items-center">
                          <h4 className="text-lg font-semibold text-gray-900 dark:text-white">AI Content Generation</h4>
                          <svg className="w-4 h-4 ml-2 text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                          </svg>
                        </div>
                        <p className="mt-2 text-gray-600 dark:text-gray-400">Our AI creates engaging content using your brand assets, ready for quick review and automatic posting to Instagram Stories and timeline.</p>
                      </div>
                    </div>
                    
                    {/* Content Feature 2 */}
                    <div 
                      className={`flex items-start p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors cursor-pointer group ${
                        activeFeature === "Social Media Scheduler" ? "bg-gray-50 dark:bg-gray-700" : ""
                      }`}
                      onClick={() => handleFeatureClick("Social Media Scheduler")}
                    >
                      <div className="flex-shrink-0 bg-teal-100 dark:bg-teal-900/30 p-3 rounded-lg">
                        <svg className="w-6 h-6 text-teal-600 dark:text-teal-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <div className="ml-4">
                        <div className="flex items-center">
                          <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Social Media Scheduler</h4>
                          <svg className="w-4 h-4 ml-2 text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                          </svg>
                        </div>
                        <p className="mt-2 text-gray-600 dark:text-gray-400">Strategic posting to Instagram Stories (3-7 daily) and timeline posts (1-2 daily) to maximize audience engagement.</p>
                      </div>
                    </div>
                    
                    {/* Content Feature 3 */}
                    <div 
                      className={`flex items-start p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors cursor-pointer group ${
                        activeFeature === "Performance Analytics" ? "bg-gray-50 dark:bg-gray-700" : ""
                      }`}
                      onClick={() => handleFeatureClick("Performance Analytics")}
                    >
                      <div className="flex-shrink-0 bg-amber-100 dark:bg-amber-900/30 p-3 rounded-lg">
                        <svg className="w-6 h-6 text-amber-600 dark:text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <div className="ml-4">
                        <div className="flex items-center">
                          <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Performance Analytics</h4>
                          <svg className="w-4 h-4 ml-2 text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                          </svg>
                        </div>
                        <p className="mt-2 text-gray-600 dark:text-gray-400">Track engagement across Instagram Stories and posts with comprehensive metrics that inform future content strategy.</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gradient-to-br from-gray-950 via-blue-950 to-purple-950 dark:bg-gradient-to-br dark:from-black dark:via-blue-950/70 dark:to-purple-950/70 p-8 md:p-12 flex items-center justify-center">
                  {/* Content Upload & Approval feature */}
                  {activeTab === 'content' && activeFeature === "AI Content Generation" ? (
                    <div className="relative w-full h-full flex items-center justify-center">
                      <div className="rounded-lg overflow-hidden shadow-white/50 drop-shadow-[0_0_8px_rgba(255,255,255,0.5)] w-full max-w-lg 
                      relative before:absolute before:inset-0 before:rounded-lg before:content-[''] before:z-0 before:animate-border-glow before:bg-[linear-gradient(115deg,#ec4899,#f472b6,#f9a8d4,#f472b6,#ec4899)] before:bg-[length:200%_200%] before:p-[2px] before:-m-[2px]">
                        {/* AI Content Generation Animation */}
                        <div className="w-full h-64 bg-white dark:bg-gray-800 rounded-lg p-4 relative z-10">
                          {/* Header with logo and status */}
                          <div className="h-8 mb-4 flex items-center justify-between">
                            <div className="flex items-center">
                              <div className="h-6 w-6 bg-pink-100 dark:bg-pink-900/30 rounded-full flex items-center justify-center mr-2">
                                <svg className="w-4 h-4 text-pink-600 dark:text-pink-400" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                                </svg>
                              </div>
                              <div className="h-4 w-40 bg-gradient-to-r from-pink-500 to-purple-500 rounded-md"></div>
                            </div>
                            <div className="px-2 py-1 bg-green-100 dark:bg-green-900/30 rounded-full text-xs font-medium text-green-600 dark:text-green-400">
                              5 Ready for Review
                            </div>
                          </div>
                          
                          {/* Content review area */}
                          <div className="grid grid-cols-3 gap-2 mb-3">
                            {/* Instagram Stories preview */}
                            <div className="col-span-1 bg-gradient-to-br from-purple-100 to-pink-100 dark:from-purple-900/20 dark:to-pink-900/20 rounded-lg overflow-hidden relative p-1 aspect-[9/16] flex flex-col">
                              <div className="absolute top-2 left-2 h-4 w-4 rounded-full border-2 border-white bg-gradient-to-br from-pink-500 to-purple-500"></div>
                              <div className="w-full h-full flex items-center justify-center">
                                <div className="h-6 w-6 bg-gray-200 dark:bg-gray-700 rounded-full animate-pulse"></div>
                              </div>
                              <div className="absolute bottom-2 left-0 right-0 mx-auto w-1/2 h-5 bg-white/80 dark:bg-gray-800/80 rounded-full flex items-center justify-center">
                                <span className="text-[8px] font-medium text-gray-800 dark:text-gray-200">Story 1/5</span>
                              </div>
                            </div>
                            
                            {/* Instagram post preview */}
                            <div className="col-span-2 bg-white dark:bg-gray-700 shadow rounded-lg overflow-hidden">
                              <div className="h-6 border-b border-gray-100 dark:border-gray-600 flex items-center px-2">
                                <div className="h-4 w-4 bg-gray-200 dark:bg-gray-600 rounded-full"></div>
                                <div className="h-3 w-20 bg-gray-200 dark:bg-gray-600 ml-2 rounded-sm"></div>
                              </div>
                              <div className="aspect-square bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-800 relative">
                                <div className="absolute inset-0 flex items-center justify-center">
                                  <div className="h-12 w-12 rounded-full bg-pink-500/20 animate-pulse flex items-center justify-center">
                                    <svg className="w-6 h-6 text-pink-600" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                    </svg>
                                  </div>
                                </div>
                                <div className="absolute bottom-2 right-2 h-8 w-8 rounded-full bg-white/90 dark:bg-gray-800/90 shadow-lg flex items-center justify-center">
                                  <svg className="w-4 h-4 text-pink-600 dark:text-pink-400" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                  </svg>
                                </div>
                              </div>
                              <div className="p-2 space-y-1.5">
                                <div className="h-3 w-full bg-gray-200 dark:bg-gray-600 rounded-sm"></div>
                                <div className="h-3 w-3/4 bg-gray-200 dark:bg-gray-600 rounded-sm"></div>
                              </div>
                            </div>
                          </div>
                          
                          {/* Action buttons */}
                          <div className="flex justify-between items-center mt-4">
                            <div className="flex space-x-2">
                              <div className="w-1/3 px-3 py-1.5 rounded-md bg-pink-50 dark:bg-pink-900/20 text-xs font-medium text-pink-600 dark:text-pink-400 flex items-center justify-center">
                                <svg className="w-3 h-3 mr-1" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                                </svg>
                                Upload Brand Assets
                              </div>
                            </div>
                            <div className="flex space-x-2">
                              <div className="px-3 py-1.5 rounded-md bg-red-50 dark:bg-red-900/20 text-xs font-medium text-red-600 dark:text-red-400">
                                Request Changes
                              </div>
                              <div className="px-3 py-1.5 rounded-md bg-green-500 text-xs font-medium text-white animate-pulse">
                                Approve & Schedule
                              </div>
                            </div>
                          </div>
                          
                          {/* Auto-posting indicator */}
                          <div className="flex items-center justify-center mt-3">
                            <div className="flex items-center bg-gray-50 dark:bg-gray-900/50 text-xs text-gray-500 dark:text-gray-400 rounded-full px-2 py-0.5">
                              <svg className="w-3 h-3 text-green-500 mr-1" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                              </svg>
                              Auto-posts to Instagram Stories & Timeline
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : activeTab === 'content' && activeFeature === "Social Media Scheduler" ? (
                    <div className="relative w-full h-full flex items-center justify-center">
                      <div className="rounded-lg overflow-hidden shadow-white/50 drop-shadow-[0_0_8px_rgba(255,255,255,0.5)] w-full max-w-lg 
                      relative before:absolute before:inset-0 before:rounded-lg before:content-[''] before:z-0 before:animate-border-glow before:bg-[linear-gradient(115deg,#0d9488,#14b8a6,#2dd4bf,#14b8a6,#0d9488)] before:bg-[length:200%_200%] before:p-[2px] before:-m-[2px]">
                        {/* Social Media Scheduler Animation */}
                        <div className="w-full h-64 bg-white dark:bg-gray-800 rounded-lg p-4 relative z-10">
                          {/* Header with platform selection */}
                          <div className="flex justify-between items-center mb-2">
                            <div className="text-sm font-medium text-gray-700 dark:text-gray-300 flex items-center">
                              <svg className="w-5 h-5 text-pink-500 mr-1" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                              </svg>
                              Instagram
                            </div>
                            <div className="flex space-x-1 bg-gray-100 dark:bg-gray-700 rounded-lg p-1">
                              <div className="px-2 py-1 bg-teal-500 rounded text-xs text-white">
                                Calendar
                              </div>
                              <div className="px-2 py-1 text-xs text-gray-600 dark:text-gray-400">
                                List
                              </div>
                            </div>
                          </div>
                          
                          {/* Instagram Stories and Timeline schedule */}
                          <div className="flex justify-between items-start mb-2">
                            <div className="text-xs font-semibold text-teal-600 dark:text-teal-400 flex items-center">
                              <svg className="w-3 h-3 mr-1" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                              </svg>
                              Stories (5/day)
                            </div>
                            <div className="text-xs font-semibold text-pink-600 dark:text-pink-400 flex items-center">
                              <svg className="w-3 h-3 mr-1" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                              </svg>
                              Posts (2/day)
                            </div>
                          </div>
                          
                          {/* Calendar with schedule */}
                          <div className="grid grid-cols-7 gap-0.5 text-center mb-1">
                            {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((day, i) => (
                              <div key={i} className="text-xs font-medium text-gray-500">{day}</div>
                            ))}
                          </div>
                          
                          <div className="grid grid-cols-7 gap-0.5">
                            {Array.from({ length: 28 }).map((_, i) => {
                              const hasStory = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14].includes(i);
                              const hasPost = [1, 3, 5, 8, 10, 12, 15, 17, 19, 22, 24, 26].includes(i);
                              const isToday = i === 8;
                              return (
                                <div 
                                  key={i} 
                                  className={`aspect-square rounded-md flex flex-col items-center justify-start p-0.5 text-xs relative ${
                                    isToday
                                      ? 'bg-teal-100 dark:bg-teal-900/50 ring-1 ring-teal-500'
                                      : 'bg-gray-50 dark:bg-gray-700'
                                  }`}
                                >
                                  <span className={`text-[10px] font-medium ${isToday ? 'text-teal-800 dark:text-teal-200' : 'text-gray-700 dark:text-gray-300'}`}>
                                    {i + 1}
                                  </span>
                                  <div className="w-full flex flex-col items-center mt-0.5 space-y-0.5">
                                    {hasStory && (
                                      <div className="w-full h-1 bg-gradient-to-r from-amber-400 to-pink-500 rounded-full"></div>
                                    )}
                                    {hasPost && i % 2 === 1 && (
                                      <div className="w-full h-1 bg-teal-500 rounded-full"></div>
                                    )}
                                    {hasPost && i % 2 === 0 && (
                                      <div className="w-full h-1 bg-blue-500 rounded-full"></div>
                                    )}
                                  </div>
                                </div>
                              );
                            })}
                          </div>
                          
                          {/* Today's posting schedule */}
                          <div className="mt-3">
                            <div className="text-xs font-medium text-gray-700 dark:text-gray-300 mb-1">
                              Today's Schedule
                            </div>
                            <div className="grid grid-cols-3 gap-1">
                              <div className="col-span-1 flex items-center p-1 bg-gradient-to-r from-amber-400 to-pink-500 rounded text-[9px] text-white font-medium">
                                <span className="truncate">Story 1/5</span>
                                <span className="ml-auto">9AM</span>
                              </div>
                              <div className="col-span-1 flex items-center p-1 bg-gradient-to-r from-amber-400 to-pink-500 rounded text-[9px] text-white font-medium">
                                <span className="truncate">Story 2/5</span>
                                <span className="ml-auto">12PM</span>
                              </div>
                              <div className="col-span-1 flex items-center p-1 bg-teal-500 rounded text-[9px] text-white font-medium animate-pulse">
                                <span className="truncate">Post 1/2</span>
                                <span className="ml-auto">3PM</span>
                              </div>
                            </div>
                          </div>
                          
                          {/* Auto-posting indicator */}
                          <div className="flex items-center justify-center mt-3">
                            <div className="flex items-center bg-gray-50 dark:bg-gray-900/50 text-xs text-gray-500 dark:text-gray-400 rounded-full px-2 py-0.5">
                              <svg className="w-3 h-3 text-green-500 mr-1" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                              </svg>
                              Auto-scheduling optimized for peak engagement
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : activeTab === 'content' && activeFeature === "Performance Analytics" ? (
                    <div className="relative w-full h-full flex items-center justify-center">
                      <div className="rounded-lg overflow-hidden shadow-white/50 drop-shadow-[0_0_8px_rgba(255,255,255,0.5)] w-full max-w-lg 
                      relative before:absolute before:inset-0 before:rounded-lg before:content-[''] before:z-0 before:animate-border-glow before:bg-[linear-gradient(115deg,#d97706,#f59e0b,#fbbf24,#f59e0b,#d97706)] before:bg-[length:200%_200%] before:p-[2px] before:-m-[2px]">
                        {/* Analytics Dashboard Animation */}
                        <div className="w-full h-64 bg-white dark:bg-gray-800 rounded-lg p-4 relative z-10">
                          {/* Analytics Header */}
                          <div className="flex justify-between items-center mb-3">
                            <div className="flex items-center">
                              <svg className="w-5 h-5 text-pink-500 mr-1" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0z" />
                              </svg>
                              <div className="font-semibold text-sm text-gray-800 dark:text-gray-200">Instagram Performance</div>
                            </div>
                            <div className="flex gap-2">
                              <div className="px-2 py-1 bg-amber-100 dark:bg-amber-900/30 rounded text-xs text-amber-600 dark:text-amber-400">
                                7 Days
                              </div>
                              <div className="px-2 py-1 bg-amber-500 rounded text-xs text-white">
                                30 Days
                              </div>
                            </div>
                          </div>
                          
                          {/* Stories vs Posts comparison */}
                          <div className="grid grid-cols-2 gap-2 mb-3">
                            <div className="bg-gradient-to-br from-amber-50 to-amber-100 dark:from-amber-900/20 dark:to-amber-800/20 rounded-lg p-2">
                              <div className="text-xs text-amber-800 dark:text-amber-300 font-medium mb-1 flex items-center">
                                <svg className="w-3 h-3 mr-1" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                Stories Performance
                              </div>
                              <div className="flex justify-between items-center">
                                <div className="text-lg font-bold text-amber-700 dark:text-amber-300">
                                  78.4K
                                </div>
                                <div className="text-xs font-medium text-green-600 dark:text-green-400 flex items-center">
                                  +24%
                                  <svg className="w-3 h-3 ml-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                                  </svg>
                                </div>
                              </div>
                              <div className="text-[10px] text-gray-500 dark:text-gray-400">
                                Total views last 30 days
                              </div>
                            </div>
                            <div className="bg-gradient-to-br from-amber-50 to-amber-100 dark:from-amber-900/20 dark:to-amber-800/20 rounded-lg p-2">
                              <div className="text-xs text-amber-800 dark:text-amber-300 font-medium mb-1 flex items-center">
                                <svg className="w-3 h-3 mr-1" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                </svg>
                                Posts Performance
                              </div>
                              <div className="flex justify-between items-center">
                                <div className="text-lg font-bold text-amber-700 dark:text-amber-300">
                                  16.2K
                                </div>
                                <div className="text-xs font-medium text-green-600 dark:text-green-400 flex items-center">
                                  +18%
                                  <svg className="w-3 h-3 ml-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                                  </svg>
                                </div>
                              </div>
                              <div className="text-[10px] text-gray-500 dark:text-gray-400">
                                Average engagement per post
                              </div>
                            </div>
                          </div>
                          
                          {/* Main analytics chart */}
                          <div className="h-16 w-full rounded-lg overflow-hidden mb-3">
                            <div className="relative h-full w-full">
                              {/* Line graph with dual lines */}
                              <div className="absolute inset-0 bg-gradient-to-b from-amber-100/50 dark:from-amber-900/20 to-transparent"></div>
                              
                              {/* SVG graph */}
                              <svg className="absolute inset-0" viewBox="0 0 100 30" preserveAspectRatio="none">
                                {/* Stories data */}
                                <path 
                                  d="M0,20 C5,18 10,25 15,15 C20,5 25,15 30,10 C35,5 40,15 45,20 C50,25 55,10 60,15 C65,20 70,15 75,10 C80,5 85,15 90,25 C95,30 100,20" 
                                  fill="none" 
                                  stroke="#f59e0b" 
                                  strokeWidth="0.8" 
                                  vectorEffect="non-scaling-stroke" 
                                />
                                
                                {/* Posts data */}
                                <path 
                                  d="M0,25 C5,23 10,20 15,22 C20,24 25,18 30,20 C35,22 40,18 45,22 C50,26 55,24 60,20 C65,16 70,22 75,25 C80,28 85,26 90,22 C95,18 100,20" 
                                  fill="none" 
                                  stroke="#ec4899" 
                                  strokeWidth="0.8" 
                                  strokeDasharray="1,1"
                                  vectorEffect="non-scaling-stroke" 
                                />
                              </svg>
                              
                              {/* Legend */}
                              <div className="absolute bottom-1 right-1 flex space-x-2 text-[8px]">
                                <div className="flex items-center">
                                  <div className="w-2 h-1 bg-amber-500 mr-1"></div>
                                  <span className="text-gray-600 dark:text-gray-400">Stories</span>
                                </div>
                                <div className="flex items-center">
                                  <div className="w-2 h-1 bg-pink-500 mr-1"></div>
                                  <span className="text-gray-600 dark:text-gray-400">Posts</span>
                                </div>
                              </div>
                            </div>
                          </div>
                          
                          {/* Key metrics */}
                          <div className="grid grid-cols-3 gap-1 text-center">
                            <div className="p-1.5 bg-gray-50 dark:bg-gray-900/50 rounded-lg">
                              <div className="text-[10px] text-gray-500 dark:text-gray-400">Profile Visits</div>
                              <div className="text-sm font-bold text-amber-600 dark:text-amber-400 flex items-center justify-center">
                                5.7K
                                <svg className="w-2.5 h-2.5 text-green-500 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                                </svg>
                              </div>
                            </div>
                            <div className="p-1.5 bg-gray-50 dark:bg-gray-900/50 rounded-lg">
                              <div className="text-[10px] text-gray-500 dark:text-gray-400">Followers</div>
                              <div className="text-sm font-bold text-amber-600 dark:text-amber-400 flex items-center justify-center animate-pulse">
                                2.3K
                                <svg className="w-2.5 h-2.5 text-green-500 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                                </svg>
                              </div>
                            </div>
                            <div className="p-1.5 bg-gray-50 dark:bg-gray-900/50 rounded-lg">
                              <div className="text-[10px] text-gray-500 dark:text-gray-400">Conversions</div>
                              <div className="text-sm font-bold text-amber-600 dark:text-amber-400 flex items-center justify-center">
                                412
                                <svg className="w-2.5 h-2.5 text-green-500 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                                </svg>
                              </div>
                            </div>
                          </div>
                          
                          {/* AI Insights tag */}
                          <div className="flex items-center justify-center mt-2">
                            <div className="flex items-center bg-amber-100 dark:bg-amber-900/30 text-xs text-amber-700 dark:text-amber-300 rounded-full px-2 py-0.5">
                              <svg className="w-3 h-3 mr-1" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                              </svg>
                              AI-powered insights & optimization recommendations
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="relative w-full max-w-md">
                      {/* Default animated illustration placeholder */}
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
                                  className={`aspect-square rounded-md flex items-center justify-center text-xs relative ${
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
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 