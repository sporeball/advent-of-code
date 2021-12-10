const input = require('../../../common').input;
const recurse = require('./errors').recurse;

const errors2 = () => {
  let arr = input.split('\n')
    .slice(0, -1);
  const openings = ['(', '[', '{', '<'];
  const closings = [')', ']', '}', '>'];

  arr = arr.map(line => recurse(line))
    .filter(line => [...line].findIndex(char => closings.includes(char)) === -1)
    .map(line => [...line].reverse().join(''))
    .map(line => [...line].map(char => closings[openings.indexOf(char)]))
    .map(line => line.reduce((a, c) => (a * 5) + closings.indexOf(c) + 1, 0))
    .sort((a, b) => a - b);

  return arr[Math.floor(arr.length / 2)];
};

module.exports = errors2;
