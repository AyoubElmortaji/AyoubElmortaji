/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Portfolio is fully static: no server actions, no dynamic routes.
  // This lets Vercel serve everything from the edge cache for top Lighthouse scores.
  poweredByHeader: false,
};

export default nextConfig;
