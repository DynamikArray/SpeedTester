//RENAME MORE ACCORDING TO SOMETHING LIKE SETTINGS?

let config = {
  DB_NAME: "speedtester",
  DB_URL: "localhost",
  SPEEDTEST_INTERVAL: "*/5 * * * *",
  RUN_SCHEDULED_JOB: false,
};

if (process.env.NODE_ENV == "production") {
  config = {
    ...config,
    DB_URL: "host.docker.internal",
    SPEEDTEST_INTERVAL: "*/15 * * * *",
    RUN_SCHEDULED_JOB: true,
  };
}

module.exports = config;
