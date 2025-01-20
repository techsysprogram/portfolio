import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone", // Important pour Northflank
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "media.licdn.com",
        pathname: "/dms/image/**",
      },
    ],
  },
  /* config options here */
};

export default nextConfig;
