module.exports = async (socket, em) => {
  //already connected so what do we want to do in here
  em.on("progressEvent", async function (progressEvent) {
    // console.log("emitting progress event to ", socket.id);
    socket.emit("PROGRESS_EVENT", progressEvent);
  });

  em.on("runningSpeedTestEvent", async function (params) {
    //console.log("runningSpeedTestEvent -  " + JSON.stringify(params) + " sending event to ", socket.id);
    socket.emit("RUNNING_SPEEDTEST_EVENT", params);
  });

  em.on("testResults", async function (testResults) {
    //console.log("testResults -  " + JSON.stringify(testResults) + " sending event to ", socket.id);
    socket.emit("FINISHED_SPEEDTEST_EVENT", testResults);
  });
};
