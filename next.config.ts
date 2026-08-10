import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'uwixvyyjukepfcqednyy.supabase.co', // Your Supabase project hostname
        port: '',
        pathname: '/storage/v1/object/public/**',
      },
    ],
    // Add allowed qualities
    qualities: [70, 75, 80, 90],
    // Allow SVG if needed
    dangerouslyAllowSVG: true,
    // Preferred formats
    formats: ['image/webp'],
  },
};

export default nextConfig;