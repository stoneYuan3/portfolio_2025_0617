import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: '/webdev',
        destination: '/',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
