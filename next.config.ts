import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  env: {
    API_URL: process.env.URL,
  },
  images: {
    domains: ["developers.elementor.com", "images.pexels.com"],
  },
};

export default nextConfig;
