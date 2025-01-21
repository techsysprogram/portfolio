import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true, // Désactive ESLint pendant le build
  },
  typescript: {
    ignoreBuildErrors: true, // Ignore les erreurs TypeScript pour éviter le blocage
  },
  output: "standalone", // Important pour Northflank
  reactStrictMode: true,
  images: {
    domains: ["res.cloudinary.com"], // Ajoutez ici tous les domaines nécessaires
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        pathname: "/dshznc4xx/**",
      },
    ],
  },
  /* config options here */
};

export default nextConfig;
