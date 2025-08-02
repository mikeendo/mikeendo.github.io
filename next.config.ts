import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // Use relative paths for static export
  assetPrefix: './',
  basePath: '',
};

export default nextConfig;
