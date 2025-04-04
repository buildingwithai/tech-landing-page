import React from 'react';
import css from 'styled-jsx/css';

export const AnimationStyles = css.global`
  /* Hover effect for cards */
  .hover\:scale-102:hover {
    transform: scale(1.02);
  }
  
  /* Fade in animation */
  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  
  .animate-fade-in {
    animation: fadeIn 0.5s ease-out forwards;
  }
  
  /* Fade in up animation */
  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  .animate-fade-in-up {
    animation: fadeInUp 0.6s ease-out forwards;
  }
  
  /* Float in from right animation */
  @keyframes floatInRight {
    from {
      opacity: 0;
      transform: translateX(-50px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }
  
  .animate-float-in-right {
    animation: floatInRight 0.7s ease-out forwards;
  }
  
  /* Float in from left animation */
  @keyframes floatInLeft {
    from {
      opacity: 0;
      transform: translateX(50px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }
  
  .animate-float-in-left {
    animation: floatInLeft 0.7s ease-out forwards;
  }
  
  /* Floating animation */
  @keyframes floating {
    0% {
      transform: translateY(0px);
    }
    50% {
      transform: translateY(-8px);
    }
    100% {
      transform: translateY(0px);
    }
  }
  
  .animate-floating {
    animation: floating 4s ease-in-out infinite;
  }
  
  /* Pulse animation */
  @keyframes pulse {
    0%, 100% {
      opacity: 1;
      transform: scale(1);
    }
    50% {
      opacity: 0.7;
      transform: scale(0.95);
    }
  }
  
  .animate-pulse {
    animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
  }
  
  /* Single ping animation */
  @keyframes pingOnce {
    0% {
      transform: scale(0.95);
      opacity: 0.8;
    }
    70% {
      transform: scale(1.2);
      opacity: 1;
    }
    100% {
      transform: scale(1);
      opacity: 1;
    }
  }
  
  .animate-ping-once {
    animation: pingOnce 1s cubic-bezier(0, 0, 0.2, 1) forwards;
  }
  
  /* Typing cursor animation */
  @keyframes typingCursor {
    from, to {
      border-right-color: transparent;
    }
    50% {
      border-right-color: currentColor;
    }
  }
  
  .animate-typing-cursor {
    border-right: 2px solid;
    animation: typingCursor 1s ease infinite;
    padding-right: 2px;
  }
  
  /* Staggered entrance animation */
  @keyframes staggeredFadeIn {
    from {
      opacity: 0;
      transform: translateY(10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  .staggered-item:nth-child(1) {
    animation: staggeredFadeIn 0.5s 0.1s forwards;
  }
  
  .staggered-item:nth-child(2) {
    animation: staggeredFadeIn 0.5s 0.2s forwards;
  }
  
  .staggered-item:nth-child(3) {
    animation: staggeredFadeIn 0.5s 0.3s forwards;
  }
  
  .staggered-item:nth-child(4) {
    animation: staggeredFadeIn 0.5s 0.4s forwards;
  }
  
  .staggered-item:nth-child(5) {
    animation: staggeredFadeIn 0.5s 0.5s forwards;
  }
  
  /* Scale in animation */
  @keyframes scaleIn {
    from {
      transform: scale(0.8);
      opacity: 0;
    }
    to {
      transform: scale(1);
      opacity: 1;
    }
  }
  
  .animate-scale-in {
    animation: scaleIn 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;
  }
  
  /* Hide scrollbar for Chrome, Safari and Opera */
  .no-scrollbar::-webkit-scrollbar {
    display: none;
  }
  
  /* Hide scrollbar for IE, Edge and Firefox */
  .no-scrollbar {
    -ms-overflow-style: none;  /* IE and Edge */
    scrollbar-width: none;  /* Firefox */
  }
  
  /* Hide scrollbars */
  .scrollbar-hide {
    -ms-overflow-style: none;  /* IE and Edge */
    scrollbar-width: none;  /* Firefox */
  }
  .scrollbar-hide::-webkit-scrollbar {
    display: none;  /* Chrome, Safari and Opera */
  }
  .no-scrollbar {
    scrollbar-width: none;  /* Firefox */
    -ms-overflow-style: none;  /* IE and Edge */
  }
  .no-scrollbar::-webkit-scrollbar {
    display: none;  /* Chrome, Safari and Opera */
  }
  
  /* Text shadow for better visibility */
  .text-shadow {
    text-shadow: 0 0 3px rgba(0, 0, 0, 0.3), 0 0 1px rgba(255, 255, 255, 0.3);
  }
  
  .text-shadow-light {
    text-shadow: 0 0 2px rgba(255, 255, 255, 0.5);
  }
  
  .text-shadow-dark {
    text-shadow: 0 0 2px rgba(0, 0, 0, 0.8);
  }
  
  .text-shadow-strong {
    text-shadow: 0 0 3px rgba(0, 0, 0, 0.5), 0 0 5px rgba(255, 255, 255, 0.5), 0 0 8px rgba(255, 255, 255, 0.3);
  }
  
  /* Text with outline for maximum visibility */
  .text-outline {
    -webkit-text-stroke: 0.5px white;
    text-stroke: 0.5px white;
    paint-order: stroke fill;
  }
  
  /* Animations */
  @keyframes gradient-x {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
  
  /* New animations for the enhanced content portal */
  
  /* Float in up animation with different timing */
  @keyframes floatInUp {
    from {
      opacity: 0;
      transform: translateY(12px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  .animate-float-in-up {
    animation: floatInUp 0.5s ease-out forwards;
    opacity: 0;
  }
  
  /* Slow pulse for emphasis */
  @keyframes slowPulse {
    0% {
      transform: scale(1);
      opacity: 1;
    }
    50% {
      transform: scale(1.05);
      opacity: 0.8;
    }
    100% {
      transform: scale(1);
      opacity: 1;
    }
  }
  
  .animate-slow-pulse {
    animation: slowPulse 3s ease-in-out infinite;
  }
  
  /* Shimmer effect */
  @keyframes shimmer {
    0% {
      background-position: -100% 0;
    }
    100% {
      background-position: 200% 0;
    }
  }
  
  .animate-shimmer {
    background: linear-gradient(90deg, 
      rgba(255,255,255,0) 0%, 
      rgba(255,255,255,0.05) 20%, 
      rgba(255,255,255,0.1) 60%, 
      rgba(255,255,255,0) 100%);
    background-size: 200% 100%;
    animation: shimmer 2s infinite;
  }
  
  /* Typing animation */
  @keyframes typing {
    from { width: 0 }
    to { width: 100% }
  }
  
  .animate-typing {
    display: inline-block;
    overflow: hidden;
    white-space: nowrap;
    animation: typing 2s steps(30, end) forwards;
    width: 0;
  }
  
  /* Bounce animation */
  @keyframes bounce {
    0%, 100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-10px);
    }
  }
  
  .animate-bounce-slow {
    animation: bounce 2s ease infinite;
  }
  
  /* Wiggle animation */
  @keyframes wiggle {
    0%, 100% {
      transform: rotate(-3deg);
    }
    50% {
      transform: rotate(3deg);
    }
  }
  
  .animate-wiggle:hover {
    animation: wiggle 0.5s ease-in-out;
  }
  
  /* Slide in from bottom animation */
  @keyframes slideInBottom {
    from {
      transform: translateY(100%);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }
  
  .animate-slide-in-bottom {
    animation: slideInBottom 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
  }
  
  /* Color change animation */
  @keyframes colorChange {
    0% {
      filter: hue-rotate(0deg);
    }
    100% {
      filter: hue-rotate(360deg);
    }
  }
  
  .animate-color-change {
    animation: colorChange 10s linear infinite;
  }
  
  /* Spin animation */
  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
  
  .animate-spin {
    animation: spin 1s linear infinite;
  }
  
  .animate-spin-slow {
    animation: spin 3s linear infinite;
  }
  
  /* Parallax effect on hover */
  .parallax-container {
    perspective: 1000px;
    transition: transform 0.1s;
  }
  
  .parallax-element {
    transition: transform 0.2s ease-out;
  }
  
  .parallax-container:hover .parallax-deep {
    transform: translateZ(-100px);
  }
  
  .parallax-container:hover .parallax-medium {
    transform: translateZ(-50px);
  }
  
  .parallax-container:hover .parallax-shallow {
    transform: translateZ(-25px);
  }
  
  /* Focus spotlight effect */
  .focus-spotlight {
    position: relative;
    overflow: hidden;
  }
  
  .focus-spotlight::after {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: radial-gradient(circle, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0) 70%);
    opacity: 0;
    transform: scale(0.5);
    transition: opacity 0.5s, transform 0.5s;
    pointer-events: none;
  }
  
  .focus-spotlight:hover::after {
    opacity: 1;
    transform: scale(1);
  }
  
  /* Text reveal animation */
  @keyframes textReveal {
    from {
      clip-path: inset(0 100% 0 0);
    }
    to {
      clip-path: inset(0 0 0 0);
    }
  }
  
  .animate-text-reveal {
    animation: textReveal 1s cubic-bezier(0.77, 0, 0.175, 1) forwards;
    animation-delay: var(--delay, 0s);
  }
`; 