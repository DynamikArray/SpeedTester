const { logger } = require("../../../util/logger");
const SpeedTestLogs = require("../../../models/logSchema.js");

async function home(req, res, next) {
  try {

    const results = await Promise.all([
      await SpeedTestLogs.getCurrentStats(),
      await SpeedTestLogs.getLatestResults(),
    ]);
    
    res.send({stats: results[0][0], results: results[1]});
    //
  } catch (e) {
    //correctly json handle this error message
    logger.error("logsController | home | error=" + e.message);
  } finally {
    //
  }
}

module.exports = { home };
