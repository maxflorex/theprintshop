module.exports = {
  reactStrictMode: true,
  images: {
    domains: [ 'firebasestorage.googleapis.com', 'images.unsplash.com'],
  },
  exportPathMap: async function (
    defaultPathMap,
    { dev, dir, outDir, distDir, buildId }
  ) {
    return {
      '/': { page: '/' },
      '/products/canvas': { page: '/products/canvas', query: {title: 'Canvas - TPS'} },
      '/products/paper': { page: '/products/paper', query: {title: 'Paper - TPS'} },
      '/products/auminum': { page: '/products/auminum', query: {title: 'Aluminum - TPS'} },
      '/products/framing': { page: '/products/framing', query: {title: 'Framing - TPS'} },
      '/services': { page: '/services', query: {title: 'Other Services - TPS'} },
      '/support': { page: '/support', query: {title: 'Support - TPS'} },
      '/order': { page: '/order', query: {title: 'Orders - TPS'} },
      '/about': { page: '/about', query: {title: 'About Us - TPS'} },
      '/contact': { page: '/contact', query: {title: 'Contact Us - TPS'} },
      '/privacy-policy': { page: '/privacy-policy', query: {title: 'Privacy Policy - TPS'} },
     }
  },
}


