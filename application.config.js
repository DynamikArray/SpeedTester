module.exports = {
  apps: [
    {
      name: "Speedtest Worker",
      script: "./worker/worker.js",
      env: {
        NODE_ENV: "development",
      },
      env_production: {
        NODE_ENV: "production",
      },
    },
    /*
    {
      name: "express api",
      script: "./server/server.js",
      args: "rotate",
    },
    */
  ],
};
