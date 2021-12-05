const vents = require('./vents');

console.log(`2+ overlap points: ${vents()}`);
console.log(`including diagonals: ${vents(true)}`);
