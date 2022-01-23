const speedTest = require("speedtest-net");
const { logger } = require("../util/logger");

const mongooseService = require("../services/mongooseService.js");
const logsModel = require("../models/logSchema.js");

const speedtestService = {
  runSpeedTestLog: async function () {
    try {
      logger.info("speedtestService | Running a speedtest");

      const testResults = await speedTest();
      const newLog = new logsModel(testResults);
      const logSaveResult = await newLog.save();

      logger.info(`speedtestService | LogsModel Saved | ${logSaveResult._id}`);
    } catch (err) {
      logger.error("speedtestService | error=" + err.message);
    } finally {
      logger.info("speedtestService | Test Complete");
    }
  },
};

module.exports = speedtestService;

/**

const { convertToMegabits } = require("../util/utilities.js");

async function handleProgress(testEvent) {
  console.log(testEvent);
}
 */
