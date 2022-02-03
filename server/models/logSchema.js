const mongoose = require("mongoose");
const { logger } = require("../util/logger");

const LogSchema = new mongoose.Schema({
  timestamp: {
    type: String,
    required: false,
  },
  ping: {
    jitter: {
      type: Number,
      required: false,
    },
    latency: {
      type: Number,
      required: false,
    },
  },
  download: {
    bandwidth: {
      type: Number,
      required: false,
    },
    bytes: {
      type: Number,
      required: false,
    },
    elapsed: {
      type: Number,
      required: false,
    },
  },
  upload: {
    bandwidth: {
      type: Number,
      required: false,
    },
    bytes: {
      type: Number,
      required: false,
    },
    elapsed: {
      type: Number,
      required: false,
    },
  },
  packetLoss: {
    type: Number,
    required: false,
  },
  isp: {
    type: String,
    required: false,
  },
  interface: {
    internalIp: { type: String, required: false },
    name: { type: String, required: false },
    macAddr: { type: String, required: false },
    isVpn: { type: Boolean, required: false },
    externalIp: { type: String, required: false },
  },
  server: {
    id: { type: Number, required: false },
    host_functional: { type: String, required: false },
    name: { type: String, required: false },
    location: { type: String, required: false },
    country: { type: String, required: false },
    host: { type: String, required: false },
    port: { type: Number, required: false },
    ip: { type: String, required: false },
  },
  result: {
    id: { type: String, required: false },
    url: { type: String, required: false },
  },
});

//Make this collection singular later?
const Log = mongoose.model("Log", LogSchema);

Log.getLatestResults = async function () {
  try {
    const results = await Log.find().sort({_id: -1}).limit(500);
    return results; 
  } catch (error) {
    logger.error("logSchema | getLatestResults | Error=", error.message);
  }
}

Log.getCurrentStats = async function () {
  try {
    const results = await Log.aggregate([
      {$sort: {timestamp: -1}},      
      {
        $group:
        {
          "_id": null,
          avgDownload: {$avg: "$download.bandwidth"} ,
          avgUpload: {$avg: "$upload.bandwidth"}  
        }
      }      
    ]);
    return results; 
  } catch (error) {
    logger.error("logSchema | getCurrentStats | Error=", error);
  }
}



module.exports = Log;
