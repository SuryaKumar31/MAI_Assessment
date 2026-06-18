import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
      },
      {
        protocol: "https",
        hostname: "d2iyhd3v3rvz2k.cloudfront.net",
      },
      {
        protocol: "https",
        hostname: "dropinblog.net",
      },
    ],
  },
};

export default nextConfig;
