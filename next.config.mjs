import path from 'path';

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'spot-light-appwrite.vercel.app',
        pathname: '/static/media/**',
      },
      {
        protocol: 'https',
        hostname: 'encrypted-tbn0.gstatic.com',
        pathname: '/images/**',
      },
    ],
  },
  experimental: {
    middleware: true, // Enable middleware support
    appDir: true,     // Enable support for the new App Directory routing (if applicable)
  },
  webpack(config) {
    // Use path.resolve to add the 'src' directory to module resolution
    config.resolve.modules.push(path.resolve('src'));
    return config;
  },
};

export default nextConfig;
