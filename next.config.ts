// Snapify Next.js Config — Enables cache for RSC

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    cache: "force-cache",
  },
};

module.exports = nextConfig;