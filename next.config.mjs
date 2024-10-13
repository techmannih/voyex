/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'example.com', // Replace with the actual domain you are using
        port: '',
        pathname: '/icons/**',
      },
    ],
  },
};

export default nextConfig;
