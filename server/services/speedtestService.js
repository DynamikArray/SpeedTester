const speedTest = require("speedtest-net");
const { logger } = require("../util/logger");

const mongooseService = require("../services/mongooseService.js");
const logsModel = require("../models/logSchema.js");

const events = require("events");
const em = new events.EventEmitter();

const speedtestService = {
  liveTestRunning: false,

  runSpeedTestLog: async function () {
    try {
      logger.info("speedtestService | Running a speedtest");

      const testResults = await speedTest();
      const newLog = new logsModel(testResults);
      const logSaveResult = await newLog.save();

      logger.info(`speedtestService | runSpeedTestLog | LogsModel Saved | ${logSaveResult._id}`);
    } catch (err) {
      logger.error("speedtestService | runSpeedTestLog | error=" + err.message);
    } finally {
      logger.info("speedtestService | runSpeedTestLog | Test Complete");
    }
  },

  runLiveSpeedTest: async function (em) {
    if (this.liveTestRunning) {
      await em.emit("runningSpeedTestEvent", { isRunning: true });
      logger.info("speedtestService | runLiveSpeedTest | Live Test Running - Skipping Test");
      return true;
    }
    try {
      logger.info("speedtestService | runLiveSpeedTest | Running a live speedtest");

      this.liveTestRunning = true;
      await em.emit("runningSpeedTestEvent", { isRunning: true });
      const testResults = await speedTest({
        progress: async (progressEvent) => {
          await em.emit("progressEvent", progressEvent);
        },
      });
      await em.emit("testResults", testResults);
    } catch (err) {
      logger.error("speedtestService | runLiveSpeedTest | error=" + err.message);
    } finally {
      this.liveTestRunning = false;
      await em.emit("runningSpeedTestEvent", { isRunning: false });
      logger.info("speedtestService | runLiveSpeedTest | Test Complete");
    }
  },
};

module.exports = speedtestService;
