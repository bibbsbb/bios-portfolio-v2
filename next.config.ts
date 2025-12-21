import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Optimize for production
  poweredByHeader: false,

  // Compress responses
  compress: true,

  // Strict mode for better development
  reactStrictMode: true,

  // Image optimization (if you add images later)
  images: {
    formats: ['image/avif', 'image/webp'],
  },
};

export default nextConfig;
