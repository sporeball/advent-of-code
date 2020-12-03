const input = require("../../../common").input;

const fcu = () => {
  var arr = input.split("\n");
  var fuel = 0;

  for (var i = 0; i < arr.length; i++) {
    var n = Number(arr[i]);
    fuel += Math.floor(n / 3) - 2;
  }

  return fuel;
}

module.exports = fcu;
