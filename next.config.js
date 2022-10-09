/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images:{
    loader: "akamai",
    path: "",
    
  },
  basePath: "/nextjs-pages",
  assetPrefix: ".",
}

module.exports = nextConfig
