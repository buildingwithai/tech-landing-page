import React from 'react';

interface FeatureHeaderProps {
  title: string;
  description: string;
}

export function FeatureHeader({ 
  title, 
  description 
}: FeatureHeaderProps) {
  return (
    <div className="border-b border-gray-200 dark:border-gray-700 mb-6 pb-6">
      <h3 className="text-xl font-bold text-gray-900 dark:text-white">{title}</h3>
      <p className="text-gray-600 dark:text-gray-400 mt-2">{description}</p>
    </div>
  );
} 