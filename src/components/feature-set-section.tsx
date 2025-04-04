"use client";

import React, { useState } from 'react';
import { AnimationStyles } from './ui/animation-styles';
import { FeatureTab } from './feature-components/feature-tab';
import { FeatureContent } from './feature-components/feature-content';
import { FeatureHeader } from './feature-components/feature-header';
import { 
  clientFeaturesData, 
  contentFeaturesData,
  renderClientFeatureContent,
  renderContentFeatureContent
} from './feature-components/feature-data';

export function FeatureSetSection() {
  // Client portal state
  const [activeClientFeature, setActiveClientFeature] = useState<string | null>("Team Collaboration");
  
  // Content portal state
  const [activeContentFeature, setActiveContentFeature] = useState<string | null>("Generate");

  return (
    <section className="bg-white dark:bg-gray-900 py-12 sm:py-16 lg:py-20 overflow-hidden">
      <style jsx global>{AnimationStyles}</style>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            All the tools you need to create exceptional content
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Our platform combines powerful creation, collaboration, and publishing tools to streamline your entire content workflow
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* First portal: Client portal */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg dark:shadow-gray-800/30 overflow-hidden">
            <div className="border-b border-gray-200 dark:border-gray-700 px-6 py-4">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">Client Portal</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">Create seamless client collaboration with our intuitive feedback system</p>
            </div>

            {/* Feature Navigation */}
            <div className="flex overflow-x-auto border-b border-gray-200 dark:border-gray-700 scrollbar-hide no-scrollbar">
              <div className="flex space-x-1 p-2">
                {clientFeaturesData.map((feature) => (
                  <FeatureTab
                    key={feature.id}
                    title={feature.title}
                    shortTitle={feature.shortTitle}
                    icon={feature.icon}
                    description={feature.description}
                    isActive={activeClientFeature === feature.id}
                    onClick={() => setActiveClientFeature(feature.id)}
                    iconBgClass={feature.iconBgClass}
                    iconColorClass={feature.iconColorClass}
                  />
                ))}
              </div>
            </div>

            {/* Feature Content */}
            <div className="p-6 bg-gradient-to-b from-gray-50 to-white dark:from-gray-800 dark:to-gray-900">
              {renderClientFeatureContent(activeClientFeature)}
            </div>
          </div>

          {/* Second portal: Content Creation */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg dark:shadow-gray-800/30 overflow-hidden">
            <div className="border-b border-gray-200 dark:border-gray-700 px-6 py-4">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">Content Portal</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">Create, schedule, and publish content to multiple platforms in one workflow</p>
            </div>

            {/* Feature Navigation */}
            <div className="flex overflow-x-auto border-b border-gray-200 dark:border-gray-700 scrollbar-hide no-scrollbar">
              <div className="flex space-x-2 p-3">
                {contentFeaturesData.map((feature) => (
                  <FeatureTab
                    key={feature.id}
                    title={feature.title}
                    shortTitle={feature.shortTitle}
                    icon={feature.icon}
                    description={feature.description}
                    isActive={activeContentFeature === feature.id}
                    onClick={() => setActiveContentFeature(feature.id)}
                    iconBgClass={feature.iconBgClass}
                    iconColorClass={feature.iconColorClass}
                  />
                ))}
              </div>
            </div>

            {/* Feature Content */}
            <div className="p-6 bg-gradient-to-b from-gray-50 to-white dark:from-gray-800 dark:to-gray-900">
              {renderContentFeatureContent(activeContentFeature)}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 