const input = require('../../../common').input;

const assignments = () => {
  let pairs = input.split('\n')
    .map(pair => pair.split(',').flatMap(asgn => asgn.split('-')))
    .map(group => group.map(Number))
    .filter(g => (g[0] <= g[2] && g[1] >= g[3]) || (g[2] <= g[0] && g[3] >= g[1]))
    .length;
  return pairs;
};

module.exports = assignments;
