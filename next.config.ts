import type { NextConfig } from "next";

/** @type {import('next').NextConfig} */
const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        // Whitelists your local and production domains for Next.js image components
        hostname: "localhost",
      },
      {
        protocol: "https",
        // Change this to your live production domain once deployed (e.g., 'ebmbook.com')
        hostname: "ebmbook.com",
      },
    ],
  },
  async rewrites() {
    return [
      {
        // Masks the S3 URL. To browsers and SEO scrapers, images live on your domain.
        source: "/public-images/:path*",
        destination:
          "https://ebmbook-s3-data.s3.us-east-1.amazonaws.com/public-images/:path*",
      },
    ];
  },
};

export default nextConfig;
