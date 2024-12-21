import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: false,
  images: {
    
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        port: "",
        pathname: "/coolpisces/**",
      },
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        port: "",
        pathname: "/edirnesydv/**",
      },
      {
        protocol: "http",
        hostname: "localhost",
        port: "1339",
        pathname: "/**",
      }
    ],
  },
};

export default nextConfig;
