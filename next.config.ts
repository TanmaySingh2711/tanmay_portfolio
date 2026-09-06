import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Removes the `X-Powered-By: Next.js` response header so the framework
  // isn't advertised to every visitor.
  poweredByHeader: false,
};

export default nextConfig;
