const path = require("path");
const webpack = require("webpack");

module.exports = {
  webpack: function (config, env) {
    const fallback = config.resolve.fallback || {};
    Object.assign(fallback, {
      "process/browser": require.resolve("process/browser"),
      crypto: require.resolve("crypto-browserify"),
      url: require.resolve("url"),
      os: require.resolve("os-browserify/browser"),
      util: require.resolve("util"),
      assert: require.resolve("assert"),
      stream: require.resolve("stream-browserify"),
      http: require.resolve("stream-http"),
      https: require.resolve("https-browserify"),
    });
    config.resolve.fallback = fallback;
    config.plugins = (config.plugins || []).concat([
      new webpack.ProvidePlugin({
        process: "process/browser",
        Buffer: ["buffer", "Buffer"],
      }),
    ]);
    config.resolve.alias = {
      components: path.resolve(__dirname, "src/app/components/"),
      types: path.resolve(__dirname, "src/types/"),
      utils: path.resolve(__dirname, "src/utils/"),
      store: path.resolve(__dirname, "src/store/"),
      assets: path.resolve(__dirname, "src/assets/"),
    };
    // To hide unwanted scss warnings
    config.ignoreWarnings = [
      (warning) => {
        return warning?.module?.resource?.endsWith?.(".scss");
      },
    ];
    return config;
  },
};
