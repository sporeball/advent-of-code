var interpreter = require("./interpreter");
var interpreter2 = require("./interpreter2");

console.log("running Intcode interpreter v1.")
console.log(`program interpreted.
the value at position 0 is ${interpreter()}.
`);
console.log("running Intcode interpreter v2.")
console.log("testing nouns and verbs for a return value of 19690720...")
console.log(`program interpreted.
the target value was found.
100 * noun + verb = ${interpreter2()}.`);
