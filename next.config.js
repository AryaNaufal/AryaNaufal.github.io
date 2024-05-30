/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
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
  basePath: '/github-pages',
}

module.exports = nextConfig
