import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",            // enables static HTML export
  trailingSlash: true,         // ensures /about becomes /about/index.html
  basePath: process.env.NODE_ENV === "production" ? "/dg-portfolio" : "",
  assetPrefix: process.env.NODE_ENV === "production" ? "/dg-portfolio/" : "",
};

export default nextConfig;
