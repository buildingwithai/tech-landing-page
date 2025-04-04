import React from 'react';

interface FeatureContentProps {
  title: string;
  description: string;
  children: React.ReactNode;
  gradientFrom?: string;
  gradientTo?: string;
  iconColorClass?: string;
}

export function FeatureContent({
  title,
  description,
  children,
  gradientFrom,
  gradientTo,
  iconColorClass
}: FeatureContentProps) {
  return (
    <div className="relative w-full">
      {/* Fixed header section - completely separate from content */}
      <div className="bg-gray-800 p-6 rounded-t-lg border-b border-gray-700">
        <h3 className={`text-3xl font-bold mb-3 ${iconColorClass || (gradientFrom && gradientTo ? `bg-clip-text text-transparent bg-gradient-to-r from-${gradientFrom}-400 to-${gradientTo}-500` : 'text-white')}`}>
          {title}
        </h3>
        <p className="text-gray-200 mb-0">
          {description}
        </p>
      </div>
      
      {/* Content section - separate from header */}
      <div className="bg-gray-800 rounded-b-lg pt-6">
        {children}
      </div>
    </div>
  );
} 