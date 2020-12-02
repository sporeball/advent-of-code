var validator = require("./validator");
var validator2 = require("./validator2");

var fs = require("fs");
var path = require("path");
var inputPath = path.join(__dirname, "input.txt");

var input = fs.readFileSync(inputPath, {encoding: "utf-8"}, function(){});
console.log("valid passwords: " + validator(input));
console.log("valid passwords (corrected): " + validator2(input));
