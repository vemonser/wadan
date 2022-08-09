/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
   images: {
    domains: ['images.unsplash.com', "github.com", "raw.githubusercontent.com","mayada.azq1.com"],
  },
}

module.exports = nextConfig
