"use client";

import React from 'react';

export function StickyCTA() {
  return (
    <div className="fixed bottom-8 right-8 z-50">
      <div className="btn-rainbow-shadow-wrapper rounded-full">
        <button 
          className="relative px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full text-white font-medium shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex items-center space-x-2 group btn-rainbow-shadow"
        >
          <span>Book a Call</span>
          <svg 
            className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M13 7l5 5m0 0l-5 5m5-5H6" 
            />
          </svg>
        </button>
      </div>
    </div>
  );
} 