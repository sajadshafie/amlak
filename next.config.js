/** @type {import('next').NextConfig} */
const nextConfig = {
  swcMinify: false,
  async rewrites() {
    return [
      {
        source: "/:path*",
        destination: "http://api2.talaremelk.ir/:path*",
      },
    ];
  },
};

module.exports = nextConfig;
