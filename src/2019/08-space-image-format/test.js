var decoder = require("./decoder");
var decoder2 = require("./decoder2");

var fs = require("fs");
var path = require("path");
var inputPath = path.join(__dirname, "input.txt");

var input = fs.readFileSync(inputPath, {encoding: "utf-8"}, function(){});
console.log("running the decoder...");
console.log("finished.\npass the number " + decoder(input) + " along to the elves.")
console.log("here is the decoded image:")
decoder2(input);