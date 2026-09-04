import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",

  images: {
    dangerouslyAllowSVG: true,
    dangerouslyAllowLocalIP: true,
    remotePatterns: [
      {
        protocol: 'http',
        hostname: '192.168.247.130',
        port: '9000',
        pathname: '/**',
      },
      {
        protocol: 'http',
        hostname: '192.168.247.130',
        port: '9001',
        pathname: '/**',
      },
      {
        protocol: 'http',
        hostname: '192.168.247.130',
        pathname: '/**',
      },
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '9000',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
