const path = require("path");

module.exports = {
  publicPath: "/",
  outputDir: "dist",

  runtimeCompiler: true,

  devServer: {
    headers: { "Access-Control-Allow-Origin": "*" },
    contentBase: path.join(__dirname, "dist"),
    compress: true,
    //https: true,
    host: "localhost",
    port: 8081,
    watchOptions: {
      poll: true,
    },
    disableHostCheck: false,
    proxy: {
      "/*": {
        target: "http://localhost:3000",
      },
    },
    stats: {
      colors: true,
    },
    logLevel: "error",
  },
  transpileDependencies: ["vuetify"],
};
