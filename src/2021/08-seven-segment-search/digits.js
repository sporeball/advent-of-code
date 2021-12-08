const input = require('../../../common').input;

const digits = () => input.split('\n')
  .map(x => x.slice(x.indexOf('|')))
  .flatMap(x => x.split(' '))
  .filter(x => x.length === 2 || x.length === 3 || x.length === 4 || x.length === 7)
  .length;

module.exports = digits;
