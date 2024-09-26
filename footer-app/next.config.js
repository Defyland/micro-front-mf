const NextFederationPlugin = require("@module-federation/nextjs-mf");

const federatedConfig = {
  name: "remoteFooter",
  filename: "static/chunks/remoteEntry.js",
  exposes: {
    "./Footer": "./src/components/Footer.tsx",
  },
  shared: {},
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
