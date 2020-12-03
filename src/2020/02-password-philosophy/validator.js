const input = require("../../../common").input;

const validator = () => {
  var arr = input.split("\n");
  var valid = 0;

  for (password of arr) {
    let [range, letter, string] = password.split(" ");
    letter = letter.slice(0, 1);
    range = range.replace("-", ",");
    if (string.match(new RegExp(`^([^${letter}]*${letter}){${range}}[^${letter}]*$`, "g"))) valid++;
  }

  return valid;
}

module.exports = validator;
