module.exports = {
  publicPath: "/",
  outputDir: "dist",

  transpileDependencies: ["vuetify"],
};

/*
devServer: {
  headers: { "Access-Control-Allow-Origin": "*" },
  contentBase: path.join(__dirname, "dist"),
  compress: true,
  //https: true,
  host: "192.168.1.112",
  port: 8081,
  watchOptions: {
    poll: true,
  },
  disableHostCheck: false,
  proxy: {
    "/*": {
      target: "http://192.168.1.112:8080",
    },
  },
  stats: {
    colors: true,
  },
  logLevel: "error",
},
*/
