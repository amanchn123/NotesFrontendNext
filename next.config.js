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
      }
    ];
  },
};

module.exports = nextConfig
