"use client";

import React, { useEffect, useRef, useState } from 'react';

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  videoSrc: string;
  title?: string;
}

export function VideoModal({ isOpen, onClose, videoSrc, title }: VideoModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);
  const [videoError, setVideoError] = useState(false);

  // Close modal when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        onClose();
      }
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      // Prevent scrolling when modal is open
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = 'auto';
    };
  }, [isOpen, onClose]);

  // Handle escape key press
  useEffect(() => {
    function handleEscKey(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        onClose();
      }
    }

    if (isOpen) {
      document.addEventListener('keydown', handleEscKey);
    }

    return () => {
      document.removeEventListener('keydown', handleEscKey);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  // Determine if this is a local video file or external URL
  const isLocalVideo = videoSrc.startsWith('/') && 
    (videoSrc.endsWith('.mp4') || videoSrc.endsWith('.webm') || videoSrc.endsWith('.mov'));

  const handleVideoError = () => {
    console.error(`Error loading video: ${videoSrc}`);
    setVideoError(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80">
      <div 
        ref={modalRef}
        className="relative bg-gray-900 rounded-lg overflow-hidden max-w-4xl w-full mx-4"
      >
        <div className="flex justify-between items-center p-4 border-b border-gray-700">
          <h3 className="text-lg font-medium text-white">
            {title || 'Feature Demo'}
          </h3>
          <button 
            onClick={onClose}
            className="text-gray-400 hover:text-white"
            aria-label="Close modal"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <div className="relative pt-[56.25%]"> {/* 16:9 aspect ratio */}
          {videoError ? (
            <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 text-white">
              <div className="text-center p-6">
                <svg className="w-12 h-12 mx-auto text-gray-400 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
                <p>Video could not be loaded.</p>
                <p className="text-sm text-gray-400 mt-2">Video file is missing or in an unsupported format.</p>
              </div>
            </div>
          ) : isLocalVideo ? (
            <video 
              className="absolute top-0 left-0 w-full h-full"
              src={videoSrc}
              controls
              controlsList="nodownload"
              onContextMenu={(e) => e.preventDefault()}
              onError={handleVideoError}
            ></video>
          ) : (
            <iframe 
              src={videoSrc}
              className="absolute top-0 left-0 w-full h-full"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              onError={handleVideoError}
              title={title || "Feature demo video"}
            ></iframe>
          )}
        </div>
      </div>
    </div>
  );
} 