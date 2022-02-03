const { logger } = require("../../../util/logger");

module.exports = async (socket, em) => {
  //already connected so what do we want to do in here
  em.on("progressEvent", async function (progressEvent) {    
    socket.emit("PROGRESS_EVENT", progressEvent);
  });

  em.on("runningSpeedTestEvent", async function (params) {
    //console.log("running speedtest");
    socket.emit("RUNNING_SPEEDTEST_EVENT", params);
  });

  em.on("testResults", async function (testResults) {        
    //console.log("TEST RESULTS???",em, socket.conn.id);
    socket.emit("FINISHED_SPEEDTEST_EVENT", testResults);        
  });
};
