const speedTest = require("speedtest-net");

const mongooseService = require("../services/mongooseService.js");
const logsModel = require("../models/logSchema.js");

const speedtestService = {
  runSpeedTestLog: async function () {
    try {
      console.log("speedtestService | Running a speedtest");

      const testResults = await speedTest({ acceptLicense: true });
      const newLog = new logsModel(testResults);
      const logSaveResult = await newLog.save();

      console.log(`speedtestService | LogsModel Saved | ${logSaveResult._id}`);
    } catch (err) {
      console.log(err.message);
    } finally {
      console.log("speedtestService | Test Complete");
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
