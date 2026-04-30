import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true },
  basePath: process.env.NODE_ENV === "production" ? "/Sketch-Brahma" : "",
  assetPrefix: process.env.NODE_ENV === "production" ? "/Sketch-Brahma/" : "",
};

export default nextConfig;
