import React, { useEffect, useRef, useState } from 'react';
import './social-card-animations.css';

interface AnimatedSocialCardProps {
  isVisible?: boolean;
  feedbackMode?: boolean;
}

export function AnimatedSocialCard({ isVisible = true, feedbackMode: externalFeedbackMode }: AnimatedSocialCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);
  const [isReady, setIsReady] = useState(false);
  const [currentView, setCurrentView] = useState<'original' | 'distribution' | 'feedback'>('original');
  const [platformsDistributed, setPlatformsDistributed] = useState<string[]>([]);
  const [showDistribution, setShowDistribution] = useState(false);
  const [internalFeedbackMode, setInternalFeedbackMode] = useState(false);
  const [activeFeedback, setActiveFeedback] = useState<{x: number, y: number, text: string, from: string} | null>(null);
  const [isInitialized, setIsInitialized] = useState(false);
  
  // Use external feedback mode if provided, otherwise use internal state
  const feedbackMode = externalFeedbackMode !== undefined ? externalFeedbackMode : internalFeedbackMode;
  
  // Platforms available for distribution
  const platforms = [
    { id: 'instagram', name: 'Instagram', icon: '📸', color: 'from-pink-500 to-purple-500' },
    { id: 'linkedin-company', name: 'LinkedIn Company', icon: '🏢', color: 'from-blue-600 to-blue-800' },
    { id: 'linkedin-personal', name: 'LinkedIn Personal', icon: '👤', color: 'from-blue-400 to-blue-600' },
    { id: 'twitter', name: 'X (Twitter)', icon: '✖️', color: 'from-gray-800 to-black' },
    { id: 'facebook', name: 'Facebook', icon: '📘', color: 'from-blue-500 to-blue-700' },
    { id: 'tiktok', name: 'TikTok', icon: '🎵', color: 'from-black to-gray-800' },
    { id: 'pinterest', name: 'Pinterest', icon: '📌', color: 'from-red-500 to-red-700' },
    { id: 'gmb', name: 'Google My Business', icon: '🔍', color: 'from-blue-500 to-green-500' }
  ];

  // Feedback items
  const feedbackItems = [
    { x: 25, y: 40, text: "Can we make the headline more catchy?", from: "client" },
    { x: 70, y: 60, text: "Sure, we can revise this to be more engaging", from: "agency" },
    { x: 80, y: 30, text: "The colors match our brand perfectly!", from: "client" }
  ];
  
  // Mouse movement effect for 3D rotation
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current || feedbackMode) return;
    
    const card = cardRef.current;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateX = (y - centerY) / 30;
    const rotateY = (centerX - x) / 30;
    
    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  };
  
  const handleMouseLeave = () => {
    if (!cardRef.current) return;
    
    setIsHovering(false);
    if (!feedbackMode) {
      cardRef.current.style.transform = 'perspective(1000px) rotateX(0) rotateY(0)';
    }
  };

  const handleCardClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!feedbackMode) return;
    
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    
    // Find if we clicked near an existing feedback point
    const clickedFeedback = feedbackItems.find(item => 
      Math.abs(item.x - x) < 5 && Math.abs(item.y - y) < 5
    );
    
    if (clickedFeedback) {
      setActiveFeedback(clickedFeedback);
    } else {
      setActiveFeedback(null);
    }
  };

  const distributeContent = () => {
    setShowDistribution(true);
    const distribute = async () => {
      for (const platform of platforms) {
        await new Promise(resolve => setTimeout(resolve, 400));
        setPlatformsDistributed(prev => [...prev, platform.id]);
      }
      
      // After distribution completes, pause before going back to original
      setTimeout(() => {
        setShowDistribution(false);
        setPlatformsDistributed([]);
        setCurrentView('original');
      }, 3000);
    };
    
    distribute();
  };
  
  const toggleFeedbackMode = () => {
    setInternalFeedbackMode(!internalFeedbackMode);
    setActiveFeedback(null);
    
    if (cardRef.current) {
      cardRef.current.style.transform = 'perspective(1000px) rotateX(0) rotateY(0)';
    }
  };
  
  // Initial animation setup
  useEffect(() => {
    if (!cardRef.current) return;
    
    // Add animation class after component mounts for entrance animation
    const timer = setTimeout(() => {
      if (cardRef.current) {
        cardRef.current.classList.add('bounce-in-effect');
        cardRef.current.classList.remove('opacity-0');
        cardRef.current.classList.add('opacity-100');
        setIsInitialized(true);
      }
    }, 300);
    
    return () => clearTimeout(timer);
  }, []);
  
  // Cycle through views for demo purposes, but only after initialization
  useEffect(() => {
    if (!isInitialized) return;
    
    let cycleTimer: NodeJS.Timeout;
    
    // Wait for a longer period on the initial state before cycling
    const initialDelay = setTimeout(() => {
      cycleTimer = setInterval(() => {
        if (currentView === 'original' && !showDistribution) {
          setCurrentView('distribution');
          setTimeout(() => {
            distributeContent();
          }, 500);
        } else if (currentView === 'distribution' && !showDistribution) {
          setCurrentView('feedback');
          setInternalFeedbackMode(true);
        } else if (currentView === 'feedback') {
          setCurrentView('original');
          setInternalFeedbackMode(false);
        }
      }, 15000); // Increased to 15 seconds per state
    }, 5000); // Wait 5 seconds before starting the cycle
    
    return () => {
      clearTimeout(initialDelay);
      clearInterval(cycleTimer);
    };
  }, [currentView, showDistribution, isInitialized]);

  return (
    <div 
      className="card-container relative w-full h-full overflow-hidden rounded-lg" 
    >
      {/* Background gradient with animated movement */}
      <div className={`absolute inset-0 bg-gradient-to-br from-purple-600 to-pink-500 opacity-90 animate-gradient-x bg-[length:200%_200%] ${feedbackMode ? 'brightness-50' : ''}`}></div>
      
      {/* Animated particles */}
      <div className="absolute inset-0 overflow-hidden">
        {Array.from({ length: 15 }).map((_, i) => (
          <div 
            key={i}
            className="absolute rounded-full bg-white opacity-20"
            style={{
              width: `${Math.random() * 8 + 2}px`,
              height: `${Math.random() * 8 + 2}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `floating ${Math.random() * 3 + 2}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 2}s`
            }}
          />
        ))}
      </div>
      
      {/* Animated wave effects */}
      <div className="absolute inset-0 wave-effect opacity-30"></div>
      
      {/* Distribution visualizer - shows when distributing to platforms */}
      {currentView === 'distribution' && (
        <div className="absolute inset-0 z-20 flex items-center justify-center bg-gray-900/80 backdrop-blur-sm distribution-container">
          <div className="text-center mb-6">
            <h3 className="text-white font-bold text-xl mb-6">Distributing to Platforms</h3>
            <div className="grid grid-cols-4 gap-4 max-w-md mx-auto">
              {platforms.map((platform, index) => {
                const isDistributed = platformsDistributed.includes(platform.id);
                return (
                  <div 
                    key={platform.id} 
                    className={`flex flex-col items-center p-2 rounded-lg transition-all duration-500 ${isDistributed ? 'scale-110' : 'opacity-50'}`}
                  >
                    <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${platform.color} flex items-center justify-center text-white text-xl shadow-lg mb-1 ${isDistributed ? 'animate-ping-once' : ''}`}>
                      {platform.icon}
                    </div>
                    <span className="text-white text-xs font-medium">{platform.name}</span>
                    {isDistributed && (
                      <span className="text-green-400 text-xs mt-1">✓ Posted</span>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}
      
      {/* Feedback mode overlay */}
      {currentView === 'feedback' && feedbackMode && (
        <div className="absolute inset-0 z-10 bg-black/10 backdrop-blur-[1px]">
          {/* Feedback pins */}
          {feedbackItems.map((item, index) => (
            <div 
              key={index}
              className={`absolute z-20 cursor-pointer ${item.from === 'client' ? 'feedback-pin-client' : 'feedback-pin-agency'}`}
              style={{ 
                left: `${item.x}%`, 
                top: `${item.y}%` 
              }}
              onClick={() => setActiveFeedback(item)}
            >
              <div className={`w-6 h-6 rounded-full flex items-center justify-center text-white text-xs font-bold ${item.from === 'client' ? 'bg-blue-500' : 'bg-green-500'}`}>
                {index + 1}
              </div>
              
              {activeFeedback === item && (
                <div className="absolute left-7 top-0 w-48 bg-white rounded-lg shadow-lg p-3 z-30 text-left">
                  <div className={`text-xs font-semibold mb-1 ${item.from === 'client' ? 'text-blue-600' : 'text-green-600'}`}>
                    {item.from === 'client' ? 'Client Feedback' : 'Agency Response'}
                  </div>
                  <p className="text-gray-800 text-sm">{item.text}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      )}
      
      {/* Main card content */}
      <div 
        ref={cardRef} 
        className="social-card relative p-6 flex flex-col h-full opacity-0 transition-all duration-500 ease-out"
        style={{ transformStyle: 'preserve-3d' }}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={handleMouseLeave}
        onClick={handleCardClick}
      >
        {/* Card header with branding */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center overflow-hidden shadow-lg glow-effect">
              <svg className="w-5 h-5 text-purple-600" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
              </svg>
            </div>
            <span className="font-bold text-white text-lg tracking-tight hover-lift">GTM LABS</span>
            <span className="text-white text-opacity-60 text-sm">@gtmlabs</span>
          </div>
          
          <div className="text-white text-opacity-80 text-xs">1/5</div>
        </div>
        
        {/* Quote icon with shine effect */}
        <div className="text-white text-opacity-90 text-4xl mb-2 hover-rotate">
          <div className="w-16 h-16 flex items-center justify-center overflow-hidden relative shine-effect">
            <svg className="w-12 h-12" viewBox="0 0 24 24" fill="currentColor">
              <path d="M7.17 17c.51 0 .98-.29 1.2-.74l1.42-2.84c.14-.28.21-.58.21-.89V8c0-.55-.45-1-1-1H5c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1h2l-1.03 2.06c-.45.89.2 1.94 1.2 1.94zm10 0c.51 0 .98-.29 1.2-.74l1.42-2.84c.14-.28.21-.58.21-.89V8c0-.55-.45-1-1-1h-4c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1h2l-1.03 2.06c-.45.89.2 1.94 1.2 1.94z" />
            </svg>
          </div>
        </div>
        
        {/* Main message with staggered animation */}
        <div className="mb-6">
          <h2 className="text-white font-bold text-2xl mb-2 staggered-item typing-effect" style={{ width: '100%' }}>
            Streamline Your Social Media with AI! 🚀
          </h2>
          <p className="text-white text-opacity-80 text-lg staggered-item" style={{ animationDelay: '0.2s' }}>
            Consistency is Key.
          </p>
        </div>
        
        {/* Call to action */}
        <div className="mt-2 staggered-item" style={{ animationDelay: '0.3s' }}>
          <span className="text-white font-semibold hover-lift inline-block">
            Sign Up at <span className="text-white underline decoration-2 decoration-white/70 shine-effect">gtmlabs.com</span> Today!
          </span>
        </div>
        
        {/* Animated arrow */}
        <div className="absolute -right-2 bottom-1/3 rotate-45 opacity-70">
          <svg className="w-20 h-20 text-white animate-pulse" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </div>
        
        {/* Social platform indicators */}
        <div className="absolute top-4 right-4 flex -space-x-2">
          {platforms.slice(0, 4).map((platform, index) => (
            <div 
              key={platform.id}
              className={`w-6 h-6 rounded-full bg-gradient-to-br ${platform.color} border-2 border-white flex items-center justify-center text-xs text-white transition-transform ${isHovering ? 'transform hover:scale-110' : ''}`}
              style={{
                zIndex: 4 - index,
              }}
            >
              {platform.icon}
            </div>
          ))}
          <div className="w-6 h-6 rounded-full bg-gray-700 border-2 border-white flex items-center justify-center text-xs text-white">
            +4
          </div>
        </div>
        
        {/* Comments section preview with hover effect */}
        <div 
          className={`absolute -bottom-1 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4 transition-transform duration-300 ${isHovering || currentView !== 'original' ? 'translate-y-0' : 'translate-y-12'}`}
        >
          <div className="flex items-center space-x-2 mb-3">
            <div className="w-8 h-8 rounded-full bg-gray-200 overflow-hidden">
              <div className="w-full h-full bg-gradient-to-br from-blue-300 to-purple-400"></div>
            </div>
            <div>
              <p className="text-white text-sm font-medium">Sarah Call</p>
              <p className="text-white/70 text-xs">Oh yeah, it looks great, let's post it!</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 rounded-full bg-gray-200 overflow-hidden">
              <div className="w-full h-full bg-gradient-to-br from-green-300 to-teal-400"></div>
            </div>
            <div>
              <p className="text-white text-sm font-medium">Elisha Coad</p>
              <p className="text-white/70 text-xs">Sweet, just published it to all your socials!</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Glossy overlay effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/10 to-transparent pointer-events-none"></div>
      
      {/* Status indicator */}
      <div className="absolute bottom-4 left-4 bg-black/40 backdrop-blur-sm px-3 py-1.5 rounded-full text-xs text-white font-medium">
        {currentView === 'original' && 'Social Media Post'}
        {currentView === 'distribution' && 'Publishing...'}
        {currentView === 'feedback' && 'Review Mode'}
      </div>
    </div>
  );
} 