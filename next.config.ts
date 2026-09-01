import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",

  reactCompiler: true,

  images: {
    unoptimized: true,
  },

  allowedDevOrigins: ["local-origin.dev", "*.local-origin.dev"],
};

export default nextConfig;