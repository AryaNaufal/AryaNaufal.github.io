/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  distDir: 'out',
  reactStrictMode: true,
  swcMinify: true,
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        hostname: 'icon.icepanel.io'
      }, 
      {
        hostname: 'i.pinimg.com'
      }
    ]
  },
}

module.exports = nextConfig
