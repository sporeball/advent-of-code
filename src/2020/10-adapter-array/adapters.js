const input = require("../../../common").input;

const adapters = () => {
  const diffs = input.split("\n")
    .map(Number)
    .concat(0)
    .sort((a,b) => a - b)
    .map((x,i,r) => (r[i + 1] - r[i]) || 3);

  return diffs.filter(x => x == 1).length
    * diffs.filter(x => x == 3).length;
}

module.exports = adapters;
