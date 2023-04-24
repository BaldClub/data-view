const { defineConfig } = require("@vue/cli-service");
const path = require("path");
module.exports = defineConfig({
  chainWebpack: (config) => {
    config.plugin("html").tap((args) => {
      args[0].title = "食用菌生产全程可视化管理系统";
      return args;
    });
  },
  lintOnSave: false,
  transpileDependencies: true,
  publicPath: "./",
  outputDir: "dist",
  assetsDir: "static",
  productionSourceMap: false,
  configureWebpack: {
    performance: {
      hints: "warning",
      maxEntrypointSize: 50000000,
      maxAssetSize: 30000000,
      assetFilter: function (assetFilename) {
        return assetFilename.endsWith(".js");
      },
    },
  },
  devServer: {
    port: 8017,
    historyApiFallback: true,
    allowedHosts: "all",
    open: false,
  },
});
