/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**', // Filhal sab jagah se images allow kar rahe hain (Production ready)
      },
    ],
  },
  // API Routes ko serverless functions mein convert karne ki limit badhana
  // (Optional: Vercel par kabhi timeout issue aaye to isse badha dena)
  experimental: {
    serverActions: {
      bodySizeLimit: '2mb',
    },
  },
};

export default nextConfig;
