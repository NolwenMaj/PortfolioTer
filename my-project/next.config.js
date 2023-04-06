/** @type {import('next').NextConfig} */

module.exports = {
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


