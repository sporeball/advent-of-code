const errors = require('./errors').errors;
const errors2 = require('./errors2');

console.log(`total syntax error score: ${errors()}`);
console.log(`middle completion score: ${errors2()}`);
