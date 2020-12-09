const input = require("../../../common").input;

const xmas2 = () => {
  var numbers = input.split("\n").map(Number);
  var w;

  for (var i = 0; i < 975; i++) {
    var X = numbers[i + 25];
    var preamble = numbers.slice(i, i + 25).sort((a, b) => a - b);
    if (preamble.some(n => n < X / 2 && preamble.includes(X - n))) {
      continue;
    }
    w = X;
  }

  for (var i = 0; i < numbers.length; i++) {
    var a = 0;
    var r = [];
    for (var j = 0; j < numbers.length; j++) {
      a += numbers[i + j];
      r.push(numbers[i + j]);
      if (a == w) {
        r = r.sort((a,b) => a-b);
        return r[0] + r[r.length - 1];
      }
      if (a > w) break;
    }
  }
}

module.exports = xmas2;
