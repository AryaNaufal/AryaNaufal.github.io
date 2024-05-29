/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    remotePatterns: [
      {
        hostname: 'icon.icepanel.io'
      }, 
      {
        hostname: 'i.pinimg.com'
      }
    ]
  },

  // basePath: "/nextjs-pages",
  // assetPrefix: ".",
}

module.exports = nextConfig
