"use client";

import React from 'react';

export function StrategicNarrativeSection() {
  return (
    <section className="w-full py-16 md:py-24 bg-black text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 animate-gradient-x">
            The GTM LABS Strategic Vision
          </h2>
          <p className="text-lg text-gray-300 mb-8">
            Our platform seamlessly integrates client management and content creation into one cohesive product marketing cycle.
          </p>
        </div>
        
        <div className="relative max-w-6xl mx-auto">
          {/* Animated flow diagram */}
          <div className="relative z-10 bg-gray-900/80 backdrop-blur-sm p-8 md:p-12 rounded-2xl border border-gray-800 shadow-xl overflow-hidden">
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute top-0 left-1/4 w-1/2 h-full bg-gradient-to-b from-blue-500/10 to-transparent skew-x-12"></div>
              <div className="absolute top-1/4 right-1/4 w-1/2 h-full bg-gradient-to-b from-purple-500/10 to-transparent -skew-x-12"></div>
            </div>
            
            <div className="relative z-10">
              {/* Flow chart */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
                {/* Client Portal Node */}
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-gradient-to-br from-blue-600 to-blue-800 shadow-lg mb-4 mx-auto">
                    <svg className="w-12 h-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Client Portal</h3>
                  <p className="text-gray-400">Tasks, tracking, and client collaboration</p>
                </div>
                
                {/* Connecting Flow Animations */}
                <div className="hidden md:flex flex-col items-center justify-center">
                  <div className="relative w-full">
                    {/* Animation lines */}
                    <svg className="w-full h-20" viewBox="0 0 200 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path 
                        className="animate-dash" 
                        d="M0 25H200" 
                        stroke="url(#gradient)" 
                        strokeWidth="2" 
                        strokeDasharray="6 3"
                      />
                      <defs>
                        <linearGradient id="gradient" x1="0" y1="0" x2="200" y2="0" gradientUnits="userSpaceOnUse">
                          <stop stopColor="#3B82F6" />
                          <stop offset="1" stopColor="#EC4899" />
                        </linearGradient>
                      </defs>
                    </svg>
                    
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gray-900 rounded-full p-2">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-pink-500 flex items-center justify-center animate-pulse">
                        <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Content Portal Node */}
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-gradient-to-br from-pink-600 to-purple-800 shadow-lg mb-4 mx-auto">
                    <svg className="w-12 h-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Content Portal</h3>
                  <p className="text-gray-400">Creation, scheduling, and performance</p>
                </div>
              </div>
              
              {/* Workflow description */}
              <div className="mt-16 text-center max-w-3xl mx-auto">
                <h4 className="text-xl font-semibold mb-4">Continuous Marketing Loop</h4>
                <p className="text-gray-300">
                  As task goals are set and completed in the Client Portal, they seamlessly feed into 
                  content creation and publication workflows in the Content Portal. Performance data 
                  then flows back to inform strategy, creating a continuous loop of marketing excellence.
                </p>
                <div className="mt-8">
                  <button className="px-8 py-3 bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500 rounded-md text-white font-medium hover:from-blue-600 hover:via-purple-700 hover:to-pink-600 transition-all duration-300 transform hover:scale-105 animate-gradient-x bg-[length:200%_200%]">
                    See the Complete Vision
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 