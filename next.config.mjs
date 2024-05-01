/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "imgd.aeplcdn.com",
      },
    ],
  },
};

export default nextConfig;
