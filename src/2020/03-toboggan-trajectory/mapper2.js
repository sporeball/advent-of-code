const input = require("../../../common").input;

const mapper2 = () => {
  const slopes = [[1, 1], [3, 1], [5, 1], [7, 1], [1, 2]];

  var arr = input.split("\n");
  var length = arr[0].length;
  var product = 1;

  for (slope of slopes) {
    var x = 0;
    var trees = 0;
    for (var y = 0; y < arr.length; y += slope[1]) {
      if (arr[y][x % length] == "#") {
        trees++;
      }
      x += slope[0];
    }
    product *= trees;
  }

  return product;
}

module.exports = mapper2;
