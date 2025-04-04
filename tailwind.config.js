/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        "pulse-slow": "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "progress-23": "progress-fill-23 2s ease-out forwards",
        "progress-45": "progress-fill-45 2s ease-out forwards",
        "progress-78": "progress-fill-78 2s ease-out forwards",
        "progress-92": "progress-fill-92 2s ease-out forwards",
        "fade-in-down": "fade-in-down 0.5s ease-out forwards",
        "border-glow": "border-glow 3s linear infinite",
        "gradient-x": "gradient-x 3s ease infinite",
        "float-card": "float-card 4s ease-in-out infinite",
        "grow-to-23": "grow-to-23 1.5s ease-out forwards",
        "grow-to-45": "grow-to-45 1.5s ease-out forwards",
        "grow-to-78": "grow-to-78 1.5s ease-out forwards",
        "grow-to-92": "grow-to-92 1.5s ease-out forwards",
        "glitch-border": "glitch-border 2s infinite steps(2, end)",
        "fade-in": "fade-in 0.5s ease-out forwards",
        "fade-in-delay": "fade-in 0.5s ease-out 0.3s forwards",
        "float-1": "float-platform 4s ease-in-out infinite",
        "float-2": "float-platform 4s ease-in-out 0.5s infinite",
        "float-3": "float-platform 4s ease-in-out 1s infinite",
        "float-4": "float-platform 4s ease-in-out 1.5s infinite",
      },
      keyframes: {
        "progress-fill-23": {
          "0%": { width: "0%" },
          "100%": { width: "23%" },
        },
        "progress-fill-45": {
          "0%": { width: "0%" },
          "100%": { width: "45%" },
        },
        "progress-fill-78": {
          "0%": { width: "0%" },
          "100%": { width: "78%" },
        },
        "progress-fill-92": {
          "0%": { width: "0%" },
          "100%": { width: "92%" },
        },
        "grow-to-23": {
          "0%": { width: "0%" },
          "100%": { width: "23%" },
        },
        "grow-to-45": {
          "0%": { width: "0%" },
          "100%": { width: "45%" },
        },
        "grow-to-78": {
          "0%": { width: "0%" },
          "100%": { width: "78%" },
        },
        "grow-to-92": {
          "0%": { width: "0%" },
          "100%": { width: "92%" },
        },
        "fade-in-down": {
          "0%": {
            opacity: "0",
            transform: "translateY(-10px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "float-platform": {
          "0%": { 
            transform: "translateY(0px)", 
          },
          "50%": { 
            transform: "translateY(-4px)", 
          },
          "100%": { 
            transform: "translateY(0px)", 
          }
        },
        "border-glow": {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
        "gradient-x": {
          "0%, 100%": {
            backgroundPosition: "0% 50%",
          },
          "50%": {
            backgroundPosition: "100% 50%",
          },
        },
        "float-card": {
          "0%": { 
            transform: "translateX(3px) translateY(6px) rotate(3deg)",
            boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.3)"
          },
          "50%": { 
            transform: "translateX(10px) translateY(4px) rotate(1deg)",
            boxShadow: "0 15px 20px -3px rgba(0, 0, 0, 0.4)"
          },
          "100%": { 
            transform: "translateX(3px) translateY(6px) rotate(3deg)",
            boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.3)"
          }
        },
        "glitch-border": {
          "0%, 100%": { 
            clipPath: "inset(0 0 98% 0)" 
          },
          "20%": { 
            clipPath: "inset(0 80% 0 0)" 
          },
          "40%": { 
            clipPath: "inset(60% 0 0 0)" 
          },
          "60%": { 
            clipPath: "inset(0 0 0 75%)" 
          },
          "80%": { 
            clipPath: "inset(90% 0 0 0)" 
          }
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      animationDelay: {
        '200': '200ms',
        '400': '400ms',
        '500': '500ms',
        '600': '600ms',
        '1000': '1000ms',
        '1500': '1500ms',
      },
      utilities: {
        '.animation-delay-200': {
          'animation-delay': '200ms',
        },
        '.animation-delay-400': {
          'animation-delay': '400ms',
        },
        '.animation-delay-500': {
          'animation-delay': '500ms',
        },
        '.animation-delay-600': {
          'animation-delay': '600ms',
        },
        '.animation-delay-1000': {
          'animation-delay': '1000ms',
        },
        '.animation-delay-1500': {
          'animation-delay': '1500ms',
        },
      },
    },
  },
  plugins: [
    function({ addUtilities }) {
      const newUtilities = {
        '.animation-delay-200': {
          'animation-delay': '200ms',
        },
        '.animation-delay-400': {
          'animation-delay': '400ms',
        },
        '.animation-delay-500': {
          'animation-delay': '500ms',
        },
        '.animation-delay-600': {
          'animation-delay': '600ms',
        },
        '.animation-delay-1000': {
          'animation-delay': '1000ms',
        },
        '.animation-delay-1500': {
          'animation-delay': '1500ms',
        },
      }
      addUtilities(newUtilities)
    }
  ],
}; 