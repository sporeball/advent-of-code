const input = require("../../../common").input;

const fcu2 = () => {
  var arr = input.split("\n");
  var fuel = 0;

  for (var i = 0; i < arr.length; i++) {
    var n = Number(arr[i]);

    var sub = Math.floor(n / 3) - 2;
    while (sub > 0) {
      fuel += sub;
      sub = Math.floor(sub / 3) - 2; // divide up previous
    }
  }

  return fuel;
}

module.exports = fcu2;
