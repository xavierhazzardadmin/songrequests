/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  generateEtags: false,
  experimental: {
      appDir: true
  }
}

module.exports = nextConfig
