/** @type {import('next').NextConfig} */
const nextConfig = {
  // Varity/Akash doesn't proxy next/image optimization, serve assets directly.
  images: { unoptimized: true },
  // Force fully dynamic — no static optimization — so every route hits the
  // server and exercises the runtime on Akash.
  experimental: {
    // empty
  },
};
export default nextConfig;
