/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  output: "export",
  assetPrefix: "/nextjs-csr-build-study",
};

module.exports = nextConfig;
