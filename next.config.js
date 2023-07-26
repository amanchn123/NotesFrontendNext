/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
    forceSwcTransforms:true,
  },
}

module.exports = {
  async redirects() {
    return [
      {
        source: '/:path*',
        destination: '/',
        permanent: false, // 301 Permanent Redirect
      },
      {
        source: '/blog/:slug', // You can use dynamic routes
        destination: '/articles/:slug', // Redirect to the new path
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig
