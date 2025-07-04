import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      new URL("https://cdn.sanity.io/images/62397x38/content/**"),
    ],
  },
};

export default nextConfig;
