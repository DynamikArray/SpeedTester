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


const {install} = require("../config/install");

//Once connect launch our server
connectDb().then(async () => {
  logger.info("Speedtester Connected to Mongo");

  //Liscense check for production only instances built through docker images
  if(process.env.NODE_ENV == 'production'){
    logger.info("Speedtester Accepting Liscensce for Speedtest.net");
    await install();
  }
  
  //setup Events Emitter for sockets
  const events = require("events");
  const em = new events.EventEmitter();

  //Pass Events Emitter to Socket Routes
  require("./routes/socket")(io, em);

  //setup scheduled jobs
  if (RUN_SCHEDULED_JOB == true) {
    const speedtestIntervalJob = schedule.scheduleJob(SPEEDTEST_INTERVAL, runSpeedTestLog);
  }

  //Start Server
  const port = process.env.APP_PORT || 3000;
  server.listen(port);


  logger.info(`Speedtester API is running on port: ${port}`);
});
