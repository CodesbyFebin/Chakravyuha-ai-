import type { NextConfig } from 'next';

const isStaticPagesBuild = Boolean(process.env.NEXT_PUBLIC_BASE_PATH);

const nextConfig: NextConfig = {
  // GitHub Pages needs a static export; Vercel must keep its server runtime so
  // the Python API function and Neon-backed routes are deployed as well.
  ...(isStaticPagesBuild ? { output: 'export' as const } : {}),
  basePath: process.env.NEXT_PUBLIC_BASE_PATH || '',
  trailingSlash: true,
  images: { unoptimized: true },
  env: {
    NEXT_PUBLIC_API_ENABLED: isStaticPagesBuild ? 'false' : 'true',
  },
  ...(!isStaticPagesBuild ? {
    async rewrites() {
      return [
        {
          source: '/api/:path*',
          destination: process.env.NODE_ENV === 'development'
            ? 'http://127.0.0.1:8000/api/:path*'
            : '/api/',
        },
      ];
    },
  } : {}),
};

export default nextConfig;
