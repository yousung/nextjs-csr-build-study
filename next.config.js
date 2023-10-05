/** @type {import('next').NextConfig} */
const nextConfig = {
  // CSR (CRA 와 같이 static export)
  output: "export",
  // github pages 배포할 때 repo name 삽입
  assetPrefix: "/nextjs-csr-build-study",
};

module.exports = nextConfig;
