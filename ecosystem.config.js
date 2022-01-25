module.exports = {
  apps: [
    /*
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
    */
    {
      name: "SpeedTest Api",
      script: "./server/index.js",
      args: "rotate",
      env: {
        NODE_ENV: "development",
      },
      env_production: {
        NODE_ENV: "production",
      },
    },
  ],
};
