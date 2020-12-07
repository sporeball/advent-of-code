const input = require("../../../common").input;
const util = require("util");
var bags;

const luggage = () => {
  bags = Object.fromEntries(
    input.split("\n")
    // split each bag into self and contents
    // then split the contents into an array
    .map(x => [
      x.slice(0, x.indexOf("contain") - 1),
      x.slice(x.indexOf("contain") + 8)
    ].map(y => y.split(", ")))
    // concatenate the two sub-arrays
    .map(x => x[0].concat(x[1])
      // remove "bag[s][.]" and the subtotals
      .map(y => y.slice(0, y.indexOf(" bag")))
      .map((y, i) => i == 0 ? y : y.slice(2))
    )
    .map(x => [x[0], x.slice(1)])
  );

  return Object.values(bags).map(k => k.map(x => recurse(x)))
    .map(x => x.flat(Infinity))
    .filter(x => x.includes("shiny gold"))
    .length;
}

recurse = item => {
  if (item.includes("shiny gold") || item == " other" || bags[item] == " other") {
    return item;
  } else {
    return bags[item].map(x => recurse(x));
  }
}

module.exports = luggage;
