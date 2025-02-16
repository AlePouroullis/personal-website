import { withContentlayer } from "next-contentlayer";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
  webpack: (config) => {
    config.resolve.fallback = {
      process: false,
    };
    return config;
  },
};

module.exports = withContentlayer(nextConfig);
