/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = nextConfig,
{
  env: {
    GEO_API: process.env.GEO_API
  }
}
