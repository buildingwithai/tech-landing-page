import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  images: {
    domains: [],
  },
  // Optional: configure static file handling
  // staticPageGenerationTimeout: 180, // Increase timeout for static generation if needed
};

export default nextConfig;
