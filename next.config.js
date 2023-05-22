/** @type {import('next').NextConfig} */
const nextConfig = {
    
}
module.exports = nextConfig
module.exports = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'files.psapi.co',
          port: '3000',
          pathname: '/account123/**',
        },
      ],
    },
  }
