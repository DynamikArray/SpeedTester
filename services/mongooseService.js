const { DB_NAME, DB_URL } = require("../config/config.js");

const mongoose = require("mongoose");

var _db;

const mongooseService = {
  connectToServer: async function () {
    mongoose.connect(`mongodb://${DB_URL}:27017/${DB_NAME}`, {
      useNewUrlParser: true,
      //useFindAndModify: false,
      useUnifiedTopology: true,
    });

    _db = mongoose.connection;
    _db.on("error", function(){ 
      console.error.bind(console, "mongooseService | DB connection  error: ")
      return false;
    });
    _db.once("open", function () {
      console.log("mongooseService | DB Connected successfully");
      return true;
    });
  },
};

module.exports = mongooseService;
