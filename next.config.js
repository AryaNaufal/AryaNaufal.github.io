/** @type {import('next').NextConfig} */
const nextConfig = {
<<<<<<< HEAD
=======
  output: "export",
>>>>>>> cddcd5c86e46379b7196b2d40ce864bd03a56628
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
