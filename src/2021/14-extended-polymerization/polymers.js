const input = require('../../../common').input;

/**
 * @param {number} n number of steps of pair insertion
 */
const polymers = n => {
  let [polymer, rules] = input.split('\n\n');
  rules = Object.fromEntries(
    rules.split('\n')
      .slice(0, -1)
      .map(rule => rule.split(' -> '))
  );
  for (n; n > 0; n--) {
    polymer = insert(polymer, rules);
  }
  const occurrences = [...new Set(polymer)]
    .map(char => polymer.match(new RegExp(char, 'g')).length)
    .sort((a, b) => a - b);
  return occurrences[occurrences.length - 1] - occurrences[0];
};

/**
 * @param {string} polymer
 * @param {Object} rules
 */
const insert = (polymer, rules) => polymer.split('')
  .map((char, i, arr) => arr[i] + arr[i + 1])
  .slice(0, -1)
  .map(pair => pair[0] + rules[pair] + pair[1])
  .map((x, i) => i > 0 ? x.slice(1) : x)
  .join('');

module.exports = polymers;
