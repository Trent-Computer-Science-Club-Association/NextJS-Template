/** @type {import('next').NextConfig} */
const nextConfig = {
  poweredByHeader: false,
  reactStrictMode: true,
  swcMinify: true,
  optimizeFonts: true,
  experimental: {
    workerThreads: true,
    optimizeCss: true,
  },
  i18n: {
    locales: ['en'],
    defaultLocale: 'en',
  },
  webpack: (config, { dev, isServer }) => {
    if (!dev && !isServer) {
      Object.assign(config.resolve.alias, {
        react: 'preact/compat',
        'react-dom/test-utils': 'preact/test-utils',
        'react-dom': 'preact/compat',
      });
    }
    return config;
  },
};

export default nextConfig;
