import React from 'react';

interface FeatureTabProps {
  title: string;
  shortTitle: string;
  description: string;
  icon: React.ReactNode;
  isActive: boolean;
  onClick: () => void;
  iconBgClass: string;
  iconColorClass: string;
}

// Define a type for color keys
type ColorKey = 'purple' | 'violet' | 'pink' | 'blue' | 'amber' | 'red' | 'green' | 'indigo' | 'emerald' | 'teal' | 'sky' | 'gray';

// Map of color name to actual color values for backgrounds and text
const colorMap: Record<ColorKey, { bg: string; lightBg: string }> = {
  purple: { bg: '#9333ea', lightBg: '#a855f7' },  // purple-600, purple-500
  violet: { bg: '#7c3aed', lightBg: '#8b5cf6' },  // violet-600, violet-500
  pink: { bg: '#db2777', lightBg: '#ec4899' },    // pink-600, pink-500
  blue: { bg: '#2563eb', lightBg: '#3b82f6' },    // blue-600, blue-500
  amber: { bg: '#d97706', lightBg: '#f59e0b' },   // amber-600, amber-500
  red: { bg: '#dc2626', lightBg: '#ef4444' },     // red-600, red-500
  green: { bg: '#059669', lightBg: '#10b981' },   // green-600, green-500
  indigo: { bg: '#4f46e5', lightBg: '#6366f1' },  // indigo-600, indigo-500
  emerald: { bg: '#059669', lightBg: '#10b981' }, // emerald-600, emerald-500
  teal: { bg: '#0d9488', lightBg: '#14b8a6' },    // teal-600, teal-500
  sky: { bg: '#0284c7', lightBg: '#0ea5e9' },     // sky-600, sky-500
  gray: { bg: '#4b5563', lightBg: '#6b7280' },    // gray-600, gray-500
};

export function FeatureTab({ 
  title, 
  shortTitle, 
  icon, 
  isActive, 
  onClick,
  iconBgClass,
  iconColorClass
}: FeatureTabProps) {
  // Get the color name from the icon color class (e.g., "purple" from "text-purple-600")
  const colorMatches = iconColorClass.match(/text-([a-z]+)-\d+/);
  const colorName = (colorMatches ? colorMatches[1] : 'gray') as ColorKey;
  
  // Get the color values
  const bgColor = isActive 
    ? colorMap[colorName].bg
    : colorMap[colorName].lightBg;
    
  return (
    <button
      onClick={onClick}
      className={`flex items-center px-3.5 py-2.5 rounded-lg transition-all duration-200 min-w-[100px] border ${
        isActive 
          ? 'bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-700 shadow-sm' 
          : 'border-transparent hover:bg-gray-100 dark:hover:bg-gray-800/60'
      }`}
    >
      <div className={`${iconBgClass} p-2 rounded-md mr-3 transition-colors ${
        isActive ? 'opacity-100' : 'opacity-70'
      }`}>
        <div className={`${iconColorClass} ${isActive ? 'opacity-100' : 'opacity-70'}`}>
          {icon}
        </div>
      </div>
      
      {/* Use inline styles for dynamic color values */}
      <div 
        className="px-2 py-0.5 rounded text-white text-sm font-bold shadow-sm"
        style={{ backgroundColor: bgColor }}
      >
        {shortTitle}
      </div>
    </button>
  );
} 