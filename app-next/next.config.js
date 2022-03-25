/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

module.exports = {
  nextConfig,
  async redirects() {
    return [
      {
        source: "/404",
        destination: "/",
        permanent: true,
      },
    ];
  },
  experimental: {
    outputStandalone: true,
  },
};
