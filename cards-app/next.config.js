const NextFederationPlugin = require("@module-federation/nextjs-mf");

const federatedConfig = {
  name: "remoteCards",
  filename: "static/chunks/remoteEntry.js",
  exposes: {
    "./ListCards": "./src/components/ListCards",
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
