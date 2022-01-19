const schedule = require("node-schedule");
const { SPEEDTEST_INTERVAL } = require("../config.js");
const { runSpeedTestLog } = require("../services/speedtestService.js");
const mongooseService = require("../services/mongooseService.js");

//Connect to mongoose
mongooseService.connectToServer();

//Every Two Minutes run this job
const speedtestIntervalJob = schedule.scheduleJob(SPEEDTEST_INTERVAL, runSpeedTestLog);
