async function home(req, res, next) {
  try {
    //
  } catch (e) {
    //correctly json handle this error message
    logger.error("logsController | home | error=" + e);
  } finally {
    //
  }
}

module.exports = { home };
