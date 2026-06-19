import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    // Allowed domains for next/Image optimization
    domains: ['images.unsplash.com'],
  },
  turbopack: {
    root: __dirname,
  },
};

export default nextConfig;
