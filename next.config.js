/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    dangerouslyAllowSVG: true,
    domains: ['images.unsplash.com'],
  },
  reactStrictMode: true,
}

module.exports = nextConfig
