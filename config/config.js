//RENAME MORE ACCORDING TO SOMETHING LIKE SETTINGS?

//Default Config
let config = {
  DB_NAME: "speedtester",
  DB_URL: "localhost",
  SPEEDTEST_INTERVAL: "*/30 * * * *",
  RUN_SCHEDULED_JOB: true,
};

//Production Overrides
if (process.env.NODE_ENV == "production") {
  config = {
    ...config,
    DB_URL: "mongo",
    SPEEDTEST_INTERVAL: "*/15 * * * *",
    RUN_SCHEDULED_JOB: true,
  };
}

module.exports = config;
