const input = require('../../../common').input;

const digits2 = () => {
  let displays = input.split('\n')
    .map(x => x.split(' '))
    .slice(0, -1);
  let sum = 0;

  for (const display of displays) {
    let patterns = display.slice(0, 10);
    let outputs = display.slice(-4)
      .map(output => [...output].sort().join(''));

    // digits we know
    let one = patterns.find(pattern => pattern.length === 2).split('');
    let seven = patterns.find(pattern => pattern.length === 3).split('');
    let four = patterns.find(pattern => pattern.length === 4).split('');
    let eight = patterns.find(pattern => pattern.length === 7).split('');

    // what a deal! also, what in god's name!
    let A = seven.find(seg => !one.includes(seg));
    let E = patterns.filter(pattern => pattern.length === 6)
      .flatMap(pattern => pattern.split('').map(seg => four.includes(seg) ? '' : seg))
      .filter(char => char !== '')
      .find((seg, i, arr) => arr.filter(s => s === seg).length === 2);
    let G = patterns.filter(pattern => pattern.length === 6)[0]
      .split('')
      .find(seg => !seven.includes(seg) && !four.includes(seg) && seg !== E);
    let B = patterns.filter(pattern => pattern.length === 5)
      .flatMap(pattern => pattern.split(''))
      .filter(seg => !seven.includes(seg) && seg !== E && seg !== G)
      .find((seg, i, arr) => arr.filter(s => s === seg).length === 1);
    let D = eight.find(seg => !one.includes(seg) && seg !== A && seg !== B && seg !== E && seg !== G);
    let C = patterns.filter(pattern => pattern.length >= 5)
      .flatMap(pattern => pattern.split(''))
      .filter(seg => seg !== A && seg !== B && seg !== D && seg !== E && seg !== G)
      .find((seg, i, arr) => arr.filter(s => s === seg).length === 5);
    let F = eight.find(seg => !([A, B, C, D, E, G]).includes(seg));

    const rendered = [A+B+C+E+F+G, C+F, A+C+D+E+G, A+C+D+F+G, B+C+D+F, A+B+D+F+G, A+B+D+E+F+G, A+C+F, A+B+C+D+E+F+G, A+B+C+D+F+G]
      .map(e => [...e].sort().join(''));
     sum += Number(outputs.map(output => rendered.indexOf(output)).join(''));
  }

  return sum;
};

module.exports = digits2;
