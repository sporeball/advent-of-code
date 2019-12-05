var interpreter = require("./interpreter");

var fs = require("fs");
var path = require("path");
var inputPath = path.join(__dirname, "input.txt");

var input = fs.readFileSync(inputPath, {encoding: "utf-8"}, function(){});
console.log("program interpreted.");
console.log("the value at position 0 is " + interpreter(input) + ".");