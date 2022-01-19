module.exports = {
  convertToMegabits: function (bytes) {
    const megaBits = parseFloat(bytes / 125000);
    const formatted = +megaBits.toFixed(0);
    return formatted;
  },
};
