const speedTest = require("speedtest-net");

function convertToMegabits(bytes) {
  const megaBits = parseFloat(bytes / 125000);
  const formatted = +megaBits.toFixed(0);
  return formatted;
}

async function handleProgress(testEvent) {
  console.log(testEvent);
}

(async () => {
  try {
    //console.log(await speedTest({progress:handleProgress}));

    const testResults = await speedTest();

    if (testResults.download.bandwidth) {
      console.log(
        "convertToMegabits:",
        convertToMegabits(testResults.download.bandwidth)
      );
    }

    const formattedResults = {
      ...testResults,
      download: {
        bandwidth: `${convertToMegabits(testResults.download.bandwidth)} Mbps`,
      },
    };

    console.log(formattedResults);

    console.log();
  } catch (err) {
    console.log(err.message);
  } finally {
    process.exit(0);
  }
})();
