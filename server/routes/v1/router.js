var express = require("express");
var router = express.Router();

const logsRouter = require("./logs/routes");

router.use("/logs", logsRouter);

module.exports = router;
