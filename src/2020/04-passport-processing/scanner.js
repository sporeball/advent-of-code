const input = require("../../../common").input;

const scanner = () => {
  var valid = 0;

  const passports = input.split("\n\n")
    .map(x => x.split("\n").join(" ")) // consolidate fields of each passport
    .map(x => x.split(" ").map(y => y.split(":"))) // split on field, and split every field on its colon
    .map(x => Object.fromEntries(x)); // turn each passport into an object

  for (passport of passports) {
    // passport must be 7 properties long if cid is absent, and 8 if present
    if (Object.entries(passport).length == 7 + (passport.cid !== undefined)) valid++;
  }

  return valid;
}

module.exports = scanner;
