/** @type {import('next').NextConfig} */

// Define nextConfig
const nextConfig = {
  output: "standalone",
  reactStrictMode: false,
  webpack: (config) => {
    config.resolve.fallback = { fs: false };
    return config;
  },
  images: {
    domains: ['dvd6ljcj7w3pj.cloudfront.net', 'prod-testvalley.s3.ap-northeast-2.amazonaws.com'],
  },
};

// Export nextConfig
export default nextConfig;
