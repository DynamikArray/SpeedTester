//build out an express server to support client viewing of logs
require("dotenv").config();
const path = require("path");
const serveStatic = require("serve-static");
const morgan = require("morgan");
const history = require("connect-history-api-fallback");

//our winston instance
const { logger } = require("./util/logger");

//App and Logger
const app = require("express")();
app.use(morgan("common"));

//Http and Socket Servers
const server = require("http").createServer(app);
const io = require("socket.io")(server, { serveClient: false });

//Mongo
const { models, connectDb } = require("./services/mongooseService");

//Schedule
const schedule = require("node-schedule");
const { runSpeedTestLog } = require("./services/speedtestService.js");
const { SPEEDTEST_INTERVAL, RUN_SCHEDULED_JOB } = require("../config/config.js");

//Router
const router = require("./routes/router.js");
app.use(router);
app.use(
  history({
    verbose: true,
    index: "/client/dist/index.html",
  })
);
router.use("/", serveStatic(path.join(__dirname, "../client/dist")));
router.get(/.*/, function (req, res) {
  res.sendFile(path.join(__dirname, "../client/dist/index.html"));
});

logger.info(`Speedtester Starting in ${process.env.NODE_ENV} mode`);

//Once connect launch our server
connectDb().then(async () => {
  logger.info("Speedtester Connected to Mongo");

  const port = process.env.PORT || 8080;
  server.listen(port);

  const events = require("events");
  const em = new events.EventEmitter();

  if (RUN_SCHEDULED_JOB == true) {
    const speedtestIntervalJob = schedule.scheduleJob(SPEEDTEST_INTERVAL, runSpeedTestLog);
  }

  require("./routes/socket")(io, em);

  logger.info(`Speedtester API is running on port: ${port}`);
});
