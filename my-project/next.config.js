/** @type {import('next').NextConfig} */

module.exports = {
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'github.com',
        pathname: '/NolwenMaj/PortfolioTer/raw/main/my-project/public/**',
      },
    ],
  },
}


