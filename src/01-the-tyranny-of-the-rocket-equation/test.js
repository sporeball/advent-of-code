var fcu = require("./fcu");
var fcu2 = require("./fcu2");

var fs = require("fs");
var path = require("path");
var inputPath = path.join(__dirname, "input.txt");

var input = fs.readFileSync(inputPath, {encoding: "utf-8"}, function(){});
console.log("starting fuel requirement: " + fcu(input));
console.log("sum of all (calculable) fuel requirements: " + fcu2(input));