/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "localhost",
      "admin.sriastarirasjid.com",
      // "118.98.221.73",
      // "gni.kemendikbud.go.id",
      // "galnas-admin-preview.herokuapp.com",
    ],
  },
};

module.exports = nextConfig;
