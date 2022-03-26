module.exports = {
  images: {
    domains: ['firebasestorage.googleapis.com', 'images.unsplash.com'],
  },
  exportPathMap: async function (
    defaultPathMap,
    { dev, dir, outDir, distDir, buildId }
  ) {
    return {
      '/': { page: '/' },
      '/products/canvas': { page: '/products/canvas',  query: { slug: 'canvas' } },
      '/products/paper': { page: '/products/paper',  query: { slug: 'paper' } },
      '/products/aluminum': { page: '/products/aluminum',  query: { slug: 'aluminum' } },
      '/products/framing': { page: '/products/framing',  query: { slug: 'framing' } },
      '/services': { page: '/services',  query: { slug: 'services' } },
      '/support': { page: '/support',  query: { slug: 'support' } },
      '/order': { page: '/order',  query: { slug: 'order' } },
      '/about': { page: '/about',  query: { slug: 'about' } },
      '/contact': { page: '/contact',  query: { slug: 'contact' } },
      '/privacy-policy': { page: '/privacy-policy',  query: { slug: 'privacy-policy' } },
      '/404': { page: '/404',  query: { slug: '404' } },
    }
  }
}






