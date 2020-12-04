const input = require("../../../common").input;

const ribbon = () => {
  var total = 0;

  const presents = input.split("\n").map(x => x.split("x"));

  for (present of presents) {
    let [l, w, h] = sides = [...present];
    total += sides.sort((a,b) => a-b).splice(0, 2).reduce((a,c) => a+(c*2), 0) + (l * w * h);
  }

  return total;
}

module.exports = ribbon;
