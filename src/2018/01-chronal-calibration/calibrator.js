const input = require("../../../common").input;

const calibrator = () => input.split("\n").reduce((a, c) => a + +c, 0);

module.exports = calibrator;
