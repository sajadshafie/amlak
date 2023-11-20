/** @type {import('next').NextConfig} */
const nextConfig = {
  swcMinify: false,
  trailingSlash: true,
  images: {
    domains: ["cdn.talaremelk.ir"],
    // remotePatterns: [
    //   {
    //     protocol: "http",
    //     hostname: "localhost:3000",
    //     port: "",
    //     pathname: "http://cdn.talaremelk.ir/Images//**",
    //   },
    // ],
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
