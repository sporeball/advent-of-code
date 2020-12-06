const input = require("../../../common").input;

const counter2 = () => {
  var sum = 0;
  var set = [...new Set(input.split("\n\n").map(x => x.split("\n").join("")).join(""))];

  for (char of set) {
    for (arr of input.split("\n\n").map(x => x.split("\n"))) {
      var regex = new RegExp(char, "g");
      if ((arr.join("").match(regex) || []).length == arr.length) {
        sum++;
      }
    }
  }

  return sum;
}

module.exports = counter2;
