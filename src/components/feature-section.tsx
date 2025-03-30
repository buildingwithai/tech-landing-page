"use client"

import React, { useState } from 'react';

export function FeatureSection() {
  const [activeTab, setActiveTab] = useState('client');

  return (
    <section className="w-full py-24 bg-slate-50">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            The Ultimate Platform for Growth
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Two powerful portals that work together seamlessly to accelerate your go-to-market strategy.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid w-full grid-cols-2 rounded-md bg-muted p-1 mb-6">
            <button
              onClick={() => setActiveTab('client')}
              className={`px-3 py-1.5 text-sm font-medium rounded-sm transition-all ${
                activeTab === 'client' 
                  ? 'bg-white text-foreground shadow-sm' 
                  : 'text-muted-foreground'
              }`}
            >
              Client Portal
            </button>
            <button
              onClick={() => setActiveTab('content')}
              className={`px-3 py-1.5 text-sm font-medium rounded-sm transition-all ${
                activeTab === 'content' 
                  ? 'bg-white text-foreground shadow-sm' 
                  : 'text-muted-foreground'
              }`}
            >
              Content Portal
            </button>
          </div>

          {activeTab === 'client' && (
            <div className="grid gap-6 md:grid-cols-2 bg-white shadow-lg rounded-xl p-6">
              <div className="space-y-4">
                <h3 className="text-xl font-bold">Instant Task Management</h3>
                <p className="text-muted-foreground">
                  Drag-and-drop simplicity for easy task assignment and organization.
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-bold">Real-Time Progress Tracking</h3>
                <p className="text-muted-foreground">
                  Watch your projects move forward with clear visualization of progress.
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-bold">Slack Integration</h3>
                <p className="text-muted-foreground">
                  Seamless communication with your team directly through Slack.
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-bold">Scalable Access</h3>
                <p className="text-muted-foreground">
                  Pause and unpause service as needed, with flexible scaling options.
                </p>
              </div>
            </div>
          )}

          {activeTab === 'content' && (
            <div className="grid gap-6 md:grid-cols-2 bg-white shadow-lg rounded-xl p-6">
              <div className="space-y-4">
                <h3 className="text-xl font-bold">Content Upload & Approval</h3>
                <p className="text-muted-foreground">
                  Streamlined workflow from upload to approval with feedback at every step.
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-bold">Post Scheduling & Calendar View</h3>
                <p className="text-muted-foreground">
                  Visual calendar interface for planning and scheduling content across platforms.
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-bold">Audience Engagement Metrics</h3>
                <p className="text-muted-foreground">
                  Interactive charts showing the impact of your content strategy over time.
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-bold">Strategic Content Planning</h3>
                <p className="text-muted-foreground">
                  Tools for aligning content with broader marketing objectives and campaigns.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
} 