/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['via.placeholder.com'],
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
        destination: '/cities/mumbai/hidden-gems',
        permanent: true,
      },
      {
        source: '/blog/budget-travel-guide-rajasthan',
        destination: '/cities/jaipur/budget',
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
