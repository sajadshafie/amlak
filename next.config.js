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
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: true,
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
