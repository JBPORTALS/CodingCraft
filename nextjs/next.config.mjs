/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "api.slingacademy.com",
      },
    ],
  },
};

export default nextConfig;
