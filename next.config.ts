import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  skipTrailingSlashRedirect: true,
  async rewrites() {
    return [
      {
        source: "/api/v1/:path*/",
        destination: "https://dev.api.candidheart.com/api/v1/:path*/",
      },
      {
        source: "/api/v1/:path*",
        destination: "https://dev.api.candidheart.com/api/v1/:path*/", // Force trailing slash on destination
      },
    ];
  },
};

export default nextConfig;
