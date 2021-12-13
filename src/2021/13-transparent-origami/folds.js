const input = require('../../../common').input;

const folds = () => {
  let [dots, instructions] = input.split('\n\n');
  dots = dots.split('\n')
    .map(dot => dot.split(',').map(Number));
  // get the furthest dots
  const w = Math.max(...dots.map(dot => dot[0]));
  const h = Math.max(...dots.map(dot => dot[1]));
  let paper = Array(h + 1).fill(0)
    .map(x => Array(w + 1).fill('.')); // why

  // dot the paper
  for (const dot of dots) {
    const [x, y] = dot;
    paper[y][x] = '#';
  }

  // crush instructions
  instructions = instructions.split('\n')
    .slice(0, -1)
    .map(inst => inst[11]);
  // execute
  instructions.forEach((inst, i) => {
    paper = (inst === 'x') ? lfold(paper) : ufold(paper);
    if (i === 0) {
      console.log('dots after 1 fold:', paper.flat().filter(x => x === '#').length);
    }
  });

  // pretty print
  console.log('final result:');
  console.log(
    paper.map(line => line.join('').replace(/#/g, '■ ').replace(/\./g, '  '))
      .join('\n')
  );
};

const ufold = paper => {
  let top = paper.slice(0, paper.length / 2);
  let bot = paper.slice(paper.length / 2).reverse();
  return top.map((line, lidx) => line.map((point, pidx) => point === '.' && bot[lidx][pidx] === '#'
    ? '#'
    : point
  ));
};

const lfold = paper => {
  let left = paper.map(line => line.slice(0, line.length / 2));
  let right = paper.map(line => line.slice(line.length / 2).reverse());
  return left.map((line, lidx) => line.map((point, pidx) => point === '.' && right[lidx][pidx] === '#'
    ? '#'
    : point
  ));
};

module.exports = folds;
