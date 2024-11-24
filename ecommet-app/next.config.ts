import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true, // Enables React Strict Mode
  swcMinify: true, // Enables SWC-based minification (faster builds)

  // Custom Webpack configuration (for handling fonts, etc.)
  webpack(config) {
    config.module.rules.push({
      test: /\.(ttf|woff|woff2|eot|otf)$/, // Font file types
      type: "asset/resource",
      generator: {
        filename: "static/fonts/[name].[hash][ext]", // Output location
      },
    });

    return config;
  },

  // Optional: Add custom headers or rewrites
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [{ key: "X-Custom-Header", value: "custom-value" }],
      },
    ];
  },

  // Optional: Set environment variables
  env: {
    CUSTOM_VARIABLE: process.env.CUSTOM_VARIABLE,
  },
};

export default nextConfig;
