/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "localhost",
        port: "3000",
        pathname: "**",
      },
    ],
  },
};

export default nextConfig;
