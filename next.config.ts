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

  // Shortlinks
  async redirects() {
    return [
      {
        // Tau Tau Chapter pitch deck
        source: '/tautau',
        destination: 'https://claude.ai/artifact/7pj5XrLBYNHstfLhQNxvT9',
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
