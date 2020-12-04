const input = require("../../../common").input;

const floors2 = () => {
  var floor = 0;
  for (var i = 0; i < input.length; i++) {
    input[i] == "(" ? floor++ : floor--;
    if (floor < 0) {
      return i + 1;
    }
  }
}

module.exports = floors2;
