const eol = require("eol");

const fs = require("fs");
const input = eol.lf(fs.readFileSync("input.txt", {encoding: "utf-8"}, function(){}));

module.exports = { input }
