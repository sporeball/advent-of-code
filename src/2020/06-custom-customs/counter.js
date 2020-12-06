const input = require("../../../common").input;

const counter = () => input.split("\n\n")
  .map(x => x.split("\n").join(""))
  .map(x => [...new Set(x)])
  .map(x => x.length)
  .reduce((a, c) => a + +c, 0);

module.exports = counter;
