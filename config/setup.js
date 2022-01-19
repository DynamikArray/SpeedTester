//Accept the Oookla Liscence onetime on the machine ?
const speedTest = require("speedtest-net");

(async () => {
  try {
    console.log("Accept Liscene");
    console.log(await speedTest({ acceptLicense: true }));
    console.log("Completed");
  } catch (err) {
    console.log(err.message);
  } finally {
    process.exit(0);
  }
})();
