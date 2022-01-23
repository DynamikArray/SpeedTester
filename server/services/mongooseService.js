const mongoose = require("mongoose");
const { logger } = require("../util/logger");

const { DB_NAME, DB_URL } = require("../../config/config.js");

const Logs = require("../models/logSchema");

const connectDb = () => {
  logger.info("Speedtester attempting to connect to Mongo");
  return mongoose.connect(`mongodb://${DB_URL}:27017/${DB_NAME}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    //useFindAndModify: false,
    //useCreateIndex: true,
  });
};

const models = { Logs };
//export default models;
module.exports = { models, connectDb };
