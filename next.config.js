/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
        domains: ['media.giphy.com'],
        unoptimized: true,
    }
}

module.exports = nextConfig
