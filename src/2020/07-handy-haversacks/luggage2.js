const input = require("../../../common").input;
var bags;
var t = 0; // bags within the shiny gold bag

const luggage2 = () => {
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
      // remove "bag[s][.]"
      .map(y => y.slice(0, y.indexOf(" bag")))
    )
    .map(x => [x[0], x.slice(1)])
  );

  // recurse over the shiny gold bag
  bags["shiny gold"] = bags["shiny gold"].map(x => Array(+x.slice(0, 1)).fill(x.slice(2)))
    .flat(Infinity)
    .map(x => recurse2(x));

  return t;
}

recurse2 = item => {
  t++;
  if (bags[item] == "no other") {
    return item;
  } else {
    return bags[item].map(x => Array(+x.slice(0, 1)).fill(x.slice(2))).flat(Infinity).map(x => recurse2(x));
  }
}

module.exports = luggage2;
