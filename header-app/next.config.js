const NextFederationPlugin = require("@module-federation/nextjs-mf");

const federatedConfig = {
  name: "remoteHeader",
  filename: "static/chunks/remoteEntry.js",
  exposes: {
    "./Header": "./src/components/Header",
  },
  shared: {
    tailwindcss: { singleton: true },
    react: { singleton: true, requiredVersion: false },
    "react-dom": { singleton: true, requiredVersion: false },
  },
};

const nextConfig = {
  reactStrictMode: true,
  typescript: {
    ignoreBuildErrors: true,
  },
  webpack(config, options) {
    config.plugins.push(new NextFederationPlugin(federatedConfig));
    return config;
  },
};
module.exports = nextConfig;
