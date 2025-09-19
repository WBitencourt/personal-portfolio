import type { NextConfig } from "next";
import createNextIntlPlugin from 'next-intl/plugin';

const hostnames = [
  'avatars.githubusercontent.com',
  'raw.githubusercontent.com',
];

const nextConfig: NextConfig = {
  images: {
    remotePatterns: hostnames.map((hostname) => ({
      protocol: 'https',
      hostname,
    })),
  },
  allowedDevOrigins: ['localhost.com', '*.localhost.com',],
};

const withNextIntl = createNextIntlPlugin();

export default withNextIntl(nextConfig);
