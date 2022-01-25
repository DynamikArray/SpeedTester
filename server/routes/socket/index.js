const { logger } = require("../../util/logger");

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
};
