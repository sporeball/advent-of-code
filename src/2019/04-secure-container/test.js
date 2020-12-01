var bruteforcer = require("./bruteforcer");
var bruteforcer2 = require("./bruteforcer2");

console.log("running the bruteforcers...");
console.log("finished.\nthere are " + bruteforcer() + " passwords that meet the first four criteria.");
console.log("there are " + bruteforcer2() + " passwords that also meet the last criterion.");