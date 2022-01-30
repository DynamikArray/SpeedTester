const { logger } = require("../../../util/logger");
const logsModel = require("../../../models/logSchema.js");

module.exports = async (socket, em) => {
  //already connected so what do we want to do in here
  em.on("progressEvent", async function (progressEvent) {    
    socket.emit("PROGRESS_EVENT", progressEvent);
  });

  em.on("runningSpeedTestEvent", async function (params) {    
    socket.emit("RUNNING_SPEEDTEST_EVENT", params);
  });

  em.on("testResults", async function (testResults) {    
    console.log("TEST RESULTS???");
    socket.emit("FINISHED_SPEEDTEST_EVENT", testResults);    
    try {
      const newLog = new logsModel(testResults);
      const logSaveResult = await newLog.save();  
      console.log("MODEL SAVED->",logSaveResult);
    } catch (error) {
      logger.error("liveTest | testResults | error=" + e.message);
    }   
  });
};
