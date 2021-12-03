const input = require('../../../common').input;

const rates = () => {
  let arr = input.split('\n');
  let gamma = '';
  for (let j = 0; j < arr[0].length; j++) {
    let now = arr.map(x => x[j])
      .join('');
    // evil
    let zeroes = now.split(0).length - 1;
    let ones = now.split(1).length - 1;
    gamma += (zeroes > ones) ? 0 : 1;
  }
  gamma = parseInt(gamma, 2);
  let epsilon = ~(gamma) & ((2 ** arr[0].length) - 1);
  return gamma * epsilon;
};

module.exports = rates;
