import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  output: 'export',
  images: {
    unoptimized: true
  },
  basePath: '/castellano-coding',
  assetPrefix: '/castellano-coding',
};

export default nextConfig;
