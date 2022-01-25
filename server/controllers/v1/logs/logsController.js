async function home(req, res, next) {
  try {
    res.send("We Made It");
    //
  } catch (e) {
    //correctly json handle this error message
    logger.error("logsController | home | error=" + e.message);
  } finally {
    //
  }
}

module.exports = { home };
