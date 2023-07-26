const nextConfig = {
  experimental: {
    appDir: true,
    forceSwcTransforms: true,
  },
};

module.exports = Object.assign({}, nextConfig, {
  async redirects() {
    return [
      {
        source: '/:path*',
        destination: '/',
        permanent: false, // 302 Temporary Redirect
      },
    ];
  },
});
