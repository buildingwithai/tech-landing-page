"use client";

import React from "react";

export function HeroSection() {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Animated background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-1/4 right-1/3 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="space-y-8">
          <div className="overflow-hidden">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 animate-gradient-x pb-2">
              Launch Faster. Market Smarter.
            </h1>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mt-2">
              One Platform.
            </h2>
          </div>
          
          <p className="mx-auto max-w-[700px] text-gray-300 text-xl md:text-2xl">
            Combine powerful collaboration tools and strategic content creation under one roof—no full-time hires, no headaches, just impact.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <div className="btn-rainbow-shadow-wrapper rounded-md">
              <button className="relative px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-md text-white font-medium transition-all duration-300 transform hover:scale-[1.03] btn-rainbow-shadow">
                Try Demo
              </button>
            </div>
            <div className="btn-rainbow-shadow-wrapper rounded-md">
              <button className="relative px-8 py-3 bg-black border border-white/30 backdrop-blur-sm rounded-md text-white font-medium transition-all duration-300 btn-rainbow-shadow">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 