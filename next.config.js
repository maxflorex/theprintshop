module.exports = {
  reactStrictMode: true,
  images: {
    loader: 'akamai',
    path: '',
    domains: ['firebasestorage.googleapis.com', 'images.unsplash.com'],
  },
  exportPathMap: async function (
    defaultPathMap,
    { dev, dir, outDir, distDir, buildId }
  ) {
    return {
      '/': { page: '/' },
      '/products/canvas': { page: '/products/canvas' },
      '/products/paper': { page: '/products/paper' },
      '/products/aluminum': { page: '/products/aluminum' },
      '/products/framing': { page: '/products/framing' },
      '/services': { page: '/services' },
      '/support': { page: '/support' },
      '/order': { page: '/order' },
      '/about': { page: '/about' },
      '/contact': { page: '/contact' },
      '/privacy-policy': { page: '/privacy-policy' },
      '/404': { page: '/404' },
    }
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"]
    });

    return config;
  }
}


