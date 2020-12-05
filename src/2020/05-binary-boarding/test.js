var partitioner = require("./partitioner");
var finder = require("./finder");

console.log(`highest seat ID: ${partitioner()}`);
console.log(`your seat ID: ${finder()}`);
