const NextFederationPlugin = require("@module-federation/nextjs-mf");

const nextConfig = {
  reactStrictMode: true,
  typescript: {
    ignoreBuildErrors: true,
  },
  webpack(config, options) {
    const { isServer } = options;
    const remotes = {
      remoteHeader: `remoteHeader@http://localhost:3001/_next/static/${
        isServer ? "ssr" : "chunks"
      }/remoteEntry.js`,
      remoteFooter: `remoteFooter@http://localhost:3002/_next/static/${
        isServer ? "ssr" : "chunks"
      }/remoteEntry.js`,
      remoteCards: `remoteCards@http://localhost:3003/_next/static/${
        isServer ? "ssr" : "chunks"
      }/remoteEntry.js`,
    };
    const federatedConfig = {
      name: "host",
      filename: "static/chunks/remoteEntry.js",
      remotes: remotes,
      shared: {
        react: { singleton: true },
        "react-dom": { singleton: true },
        tailwindcss: { singleton: true },
      },
    };
    config.plugins.push(new NextFederationPlugin(federatedConfig));
    return config;
  },
};
module.exports = nextConfig;
