//build out an express server to support client viewing of logs
require("dotenv").config();
//our winston instance
const { logger } = require("./util/logger");
//our express server and io server
const { server, io } = require("./server");
//Mongo
const { connectDb } = require("./services/mongooseService");
//speedtest job settings
const schedule = require("node-schedule");
const { SPEEDTEST_INTERVAL, RUN_SCHEDULED_JOB } = require("../config/config.js");
const { runSpeedTestLog } = require("./services/speedtestService.js");

logger.info(`Speedtester Starting in ${process.env.NODE_ENV} mode`);

//Once connect launch our server
connectDb().then(async () => {
  logger.info("Speedtester Connected to Mongo");

  const port = process.env.PORT || 8080;
  server.listen(port);

  const events = require("events");
  const em = new events.EventEmitter();

  if (RUN_SCHEDULED_JOB == true) {
    const speedtestIntervalJob = schedule.scheduleJob(SPEEDTEST_INTERVAL, runSpeedTestLog);
  }

  require("./routes/socket")(io, em);

  logger.info(`Speedtester API is running on port: ${port}`);
});
