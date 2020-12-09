const input = require("../../../common").input;

const xmas = () => {
  var numbers = input.split("\n").map(Number);

  for (var i = 0; i < 975; i++) {
    var X = numbers[i + 25];
    var preamble = numbers.slice(i, i + 25).sort((a, b) => a - b);
    if (preamble.some(n => n < X / 2 && preamble.includes(X - n))) {
      continue;
    }
    return X;
  }
}

module.exports = xmas;
