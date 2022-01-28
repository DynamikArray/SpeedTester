const { logger } = require("../../util/logger");
const logsModel = require("../../models/logSchema.js");


const speedtestService = require("../../services/speedtestService");

module.exports = (io, em) => {
  io.on("connection", function (socket) {
    logger.info("Speedtester Socket Connection established | socketId=" + socket.id);

    //lets start a speedtest for our client, if one is running they
    //will start recieving the values from the running test
    socket.on("startSpeedTest", () => {
      speedtestService.runLiveSpeedTest(em);
    });

    require("./liveTest/liveTest")(socket, em);
  });


  //Handle saving new log results?
  //This needs a better events patter ?
  em.on("testResults", async function (testResults) {            
    try {
      const newLog = new logsModel(testResults);
      const logSaveResult = await newLog.save();        
    } catch (error) {
      logger.error("liveTest | testResults | error=" + error.message);
    }   
  });

};
