/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    unoptimized: true,
  },
  // Configure basePath only for production (GitHub Pages)
  ...(process.env.NODE_ENV === "production"
    ? {
        output: "export",
        basePath: "/web-portfolio",
      }
    : {}),
};

module.exports = nextConfig;
