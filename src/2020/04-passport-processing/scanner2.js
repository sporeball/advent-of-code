const input = require("../../../common").input;

const scanner = () => {
  const ecls = ["amb", "blu", "brn", "gry", "grn", "hzl", "oth"];
  var valid = 0;


  const passports = input.split("\n")
    .map(x => x == "" ? "X" : x) // replace blanks with X
    .join(" ") // join all
    .split("X")
    // turn each into array, split on field, and split every field on its colon
    .map(x => x.trim().split(" ").map(y => y.split(":")))
    .map(x => Object.fromEntries(x)); // turn each into object

  for (passport of passports) {
    if (passport.byr >= 1920 && passport.byr <= 2002 &&
      passport.iyr >= 2010 && passport.iyr <= 2020 &&
      passport.eyr >= 2020 && passport.eyr <= 2030 &&
      passport.hcl && passport.hcl.match(/^#[0-9a-f]{6}$/) &&
      ecls.includes(passport.ecl) &&
      (passport.pid + "").length == 9 &&
      Object.entries(passport).length == 7 + (passport.cid !== undefined)) {
      let height = +passport.hgt.slice(0, -2);
      switch (passport.hgt.slice(-2)) {
        case "cm":
          if (height >= 150 && height <= 193) valid++;
          break;
        default:
          if (height >= 59 && height <= 76) valid++;
      }
    }
  }
  return valid;
}

module.exports = scanner;
