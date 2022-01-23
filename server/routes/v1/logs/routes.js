var express = require("express");
var router = express.Router();

const logsController = require("../../../controllers/v1/logs/logsController");

router.get("/", logsController.home);

module.exports = router;