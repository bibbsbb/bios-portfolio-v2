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

  // Tau Tau Chapter pitch deck: a static page in public/tautau, kept out of search results
  async rewrites() {
    return [
      { source: '/tautau', destination: '/tautau/index.html' },
      { source: '/tautau/checklist', destination: '/tautau/checklist/index.html' },
      { source: '/tautau/intake', destination: '/tautau/intake/index.html' },
    ];
  },

  async headers() {
    return [
      {
        source: '/tautau/:path*',
        headers: [{ key: 'X-Robots-Tag', value: 'noindex, nofollow' }],
      },
      {
        source: '/tautau',
        headers: [{ key: 'X-Robots-Tag', value: 'noindex, nofollow' }],
      },
    ];
  },
};

export default nextConfig;
