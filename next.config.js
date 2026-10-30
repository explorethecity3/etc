/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 2592000,
  },
  async headers() {
    const immutableCache = 'public, max-age=31536000, immutable'
    return [
      {
        source: '/fonts/:path*',
        headers: [{ key: 'Cache-Control', value: immutableCache }],
      },
      {
        source: '/images/photos/:path*',
        headers: [{ key: 'Cache-Control', value: immutableCache }],
      },
    ]
  },
  async redirects() {
    return [
      {
        source: '/index.html',
        destination: '/',
        permanent: true,
      },
      {
        source: '/blog/10-hidden-gems-in-mumbai',
        destination: '/cities/mumbai#hidden-gems',
        permanent: true,
      },
      {
        source: '/blog/budget-travel-guide-rajasthan',
        destination: '/cities/jaipur#budget',
        permanent: true,
      },
      {
        source: '/mumbai.html',
        destination: '/cities/mumbai',
        permanent: true,
      },
      {
        source: '/goa.html',
        destination: '/cities/goa',
        permanent: true,
      },
      {
        source: '/new-delhi.html',
        destination: '/cities/delhi',
        permanent: true,
      },
      {
        source: '/shimla.html',
        destination: '/city-directory',
        permanent: true,
      },
      {
        source: '/manali.html',
        destination: '/city-directory',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig
