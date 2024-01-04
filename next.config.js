/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: true,
  },
  swcMinify: false,
  images: {
    domains: ["cdn.talaremelk.ir"],
  },
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
