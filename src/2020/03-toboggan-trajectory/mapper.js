const input = require("../../../common").input;

const mapper = () => {
  var arr = input.split("\n");
  var length = arr[0].length;
  var x = 0;
  var trees = 0;

  for (var y = 0; y < arr.length; y++) {
    if (arr[y][x % length] == "#") {
      trees++;
    }
    x += 3;
  }

  return trees;
}

module.exports = mapper;
