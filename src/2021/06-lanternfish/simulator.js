const input = require('../../../common').input;

/**
 * @param {number} days days to run the simulation for
 */
const simulator = days => {
  let counts = Array(9).fill(0)
    .map((x, i) => (input.match(new RegExp(i, 'g')) || []).length);

  for (let day = 0; day < days; day++) {
    let zeroes = counts[0];
    counts.shift(); // left shift
    counts.push(zeroes); // zeroes spawn 8's
    counts[6] += zeroes; // and join with 6's
  }
  
  return counts.reduce((a, c) => a + c);
};

module.exports = simulator;
