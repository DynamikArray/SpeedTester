const { DB_NAME } = require("../config/config.js");
const mongoose = require("mongoose");

var _db;

const mongooseService = {
  connectToServer: async function () {
    mongoose.connect(`mongodb://localhost:27017/${DB_NAME}`, {
      useNewUrlParser: true,
      //useFindAndModify: false,
      useUnifiedTopology: true,
    });

    _db = mongoose.connection;
    _db.on("error", console.error.bind(console, "mongooseService | DB connection error: "));
    _db.once("open", function () {
      console.log("mongooseService | DB Connected successfully");
    });
  },
};

module.exports = mongooseService;
