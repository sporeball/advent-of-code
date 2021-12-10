const input = require('../../../common').input;

const errors = () => {
  let arr = input.split('\n')
    .slice(0, -1);
  const openings = ['(', '[', '{', '<'];
  const closings = [')', ']', '}', '>'];
  const lookup = [3, 57, 1197, 25137];

  arr = arr.map(line => recurse(line))
    .filter(line => [...line].findIndex(char => closings.includes(char)) > -1);

  return arr.map(line => [...line].find(char => closings.includes(char)))
    .map(char => lookup[closings.indexOf(char)])
    .reduce((a, c) => a + c, 0);
};

const recurse = line => {
  let next = line.replace(/\(\)/gm, '')
    .replace(/\[\]/gm, '')
    .replace(/{}/gm, '')
    .replace(/<>/gm, '');
  if (next === line) {
    return line;
  } else {
    return recurse(next);
  }
};

module.exports = errors;
