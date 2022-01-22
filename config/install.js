//Accept the Oookla Liscence onetime on the machine ?
const speedTest = require("speedtest-net");

async function acceptLicense() {
  try {
    console.log("Accepting Liscene waiting...");
    console.log(await speedTest({ acceptLicense: true }));
    console.log("Completed");
    return true;
  } catch (err) {
    console.log(err.message);
    return false;
  } finally {
    //process.exit(0);
  }
}

async function install() {
  return await acceptLicense();
}

module.exports = { install, acceptLicense };
