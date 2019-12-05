var interpreter = require("./interpreter");
var interpreter2 = require("./interpreter2");

var fs = require("fs");
var path = require("path");
var inputPath = path.join(__dirname, "input.txt");

var input = fs.readFileSync(inputPath, {encoding: "utf-8"}, function(){});
console.log("running Intcode interpreter v1...")
console.log("program interpreted.\nthe value at position 0 is " + interpreter(input) + ".\n");
console.log("running Intcode interpreter v2...")
console.log("program interpreted.\nthe value at position 0 is " + interpreter2(input) + ".");