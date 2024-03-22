/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'https://starwars-api-production-979e.up.railway.app/:path*', // Proxy a Railway
      },
    ]
  },
};

export default nextConfig;
