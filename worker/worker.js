const schedule = require("node-schedule");
const { SPEEDTEST_INTERVAL, DEV_SPEEDTEST_INTERVAL } = require("../config/config.js");
const { install } = require("../config/install.js");
const { runSpeedTestLog } = require("../services/speedtestService.js");
const mongooseService = require("../services/mongooseService.js");

async function worker() {
  

  //Connect to mongoose
  try {
    await install();

    await mongooseService.connectToServer();

    //Every Two Minutes run this job
    let speedtestInterval = SPEEDTEST_INTERVAL;
    if (process.env.NODE_ENV == "development") speedtestInterval = DEV_SPEEDTEST_INTERVAL;

    console.log("worker | " + process.env.NODE_ENV + " Mode Enabled | SpeedTest Interval=" + speedtestInterval);

    const speedtestIntervalJob = schedule.scheduleJob(speedtestInterval, runSpeedTestLog);

    } catch (error) {
      console.log(error);
    }
}

worker();
