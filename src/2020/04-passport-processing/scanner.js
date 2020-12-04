const input = require("../../../common").input;

const scanner = () => {
  var valid = 0;

  const passports = input.split("\n")
    .map(x => x == "" ? "X" : x) // replace blanks with X
    .join(" ") // join all
    .split("X")
    // turn each into array, split on field, and split every field on its colon
    .map(x => x.trim().split(" ").map(y => y.split(":")))
    .map(x => Object.fromEntries(x)); // turn each into object

  for (passport of passports) {
    // passport must be 7 properties long if cid is absent, and 8 if present
    if (Object.entries(passport).length == 7 + (passport.cid !== undefined)) valid++;
  }
  
  return valid;
}

module.exports = scanner;
