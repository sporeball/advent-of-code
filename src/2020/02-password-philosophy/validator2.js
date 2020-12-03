const input = require("../../../common").input;

const validator2 = () => {
  var arr = input.split("\n");
  var valid = 0;

  for (password of arr) {
    let [positions, letter, string] = password.split(" ");
    let [high, low] = positions.split("-");
    letter = letter.slice(0, 1);
    if ((string[high - 1] == letter) ^ (string[low - 1] == letter)) valid++;
  }

  return valid;
}

module.exports = validator2;
