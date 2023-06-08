/** @type {import('next').NextConfig} */

module.exports = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  reactStrictMode: true,
  images: {
    domains: ["github.com", "raw.githubusercontent.com"],
  },
};
