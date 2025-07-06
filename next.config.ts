import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: '**',
            },
        ],
    },

    eslint: {
        ignoreDuringBuilds: true,
      },
    
    // Ignore TypeScript errors during builds
    typescript: {
    ignoreBuildErrors: true,
    },
};

export default nextConfig;
