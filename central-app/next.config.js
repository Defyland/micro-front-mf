const NextFederationPlugin = require("@module-federation/nextjs-mf");

const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  webpack(config, options) {
    const { isServer } = options;
    const federatedConfig = {
      name: "host",
      filename: "static/chunks/remoteEntry.js",
      remotes: {
        remoteHeader:
          "remoteHeader@http://localhost:3001/_next/static/chunks/remoteEntry.js",
        remoteFooter:
          "remoteFooter@http://localhost:3002/_next/static/chunks/remoteEntry.js",
        remoteCards:
          "remoteCards@http://localhost:3003/_next/static/chunks/remoteEntry.js",
      },
      runtime: {
        force: true,
      },
      shared: {},
    };
    config.plugins.push(new NextFederationPlugin(federatedConfig));
    return config;
  },
};

module.exports = nextConfig;
