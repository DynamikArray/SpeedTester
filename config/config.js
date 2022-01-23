//RENAME MORE ACCORDING TO SOMETHING LIKE SETTINGS?

let config = {
  DB_NAME: "speedtester",
  DB_URL: "localhost",
  SPEEDTEST_INTERVAL: "*/5 * * * *",
  RUN_SCHEDULED_JOB: true,
};

if (process.env.NODE_ENV == "production") {
  config = {
    ...config,
    SPEEDTEST_INTERVAL: "*/15 * * * *",
    DB_URL: "host.docker.internal",
  };
}

module.exports = config;
