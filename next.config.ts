import { withSentryConfig } from "@sentry/nextjs";
import type { NextConfig } from "next";
import path from "path"; // ✅ Needed for resolving paths

const nextConfig: NextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  webpack: (config) => {
    config.resolve.alias = {
      ...(config.resolve.alias || {}),
      "@": path.resolve(__dirname), // ✅ This enables @/ alias
    };
    return config;
  },
};

export default withSentryConfig(nextConfig, {
  org: "abdul-mustafa-muhammad-mohib",
  project: "javascript-nextjs",
  silent: !process.env.CI,
  widenClientFileUpload: true,
  disableLogger: true,
  automaticVercelMonitors: true,
});
