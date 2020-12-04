const input = require("../../../common").input;

const paper = () => {
  var total = 0;

  const presents = input.split("\n").map(x => x.split("x"));

  for (present of presents) {
    let [l, w, h] = [...present];
    total += 2*l*w + 2*w*h + 2*h*l + [l*w, w*h, h*l].sort((a,b) => a-b)[0];
  }

  return total;
}

module.exports = paper;
