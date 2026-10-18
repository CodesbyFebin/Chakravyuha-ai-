import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/Chakravyuha-ai-',
  trailingSlash: true,
  images: { unoptimized: true },
};

export default nextConfig;
