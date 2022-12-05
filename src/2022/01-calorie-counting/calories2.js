const input = require('../../../common').input;

const calories2 = () => {
  let arr = input.split('\n\n')
    .map(elf => elf.split('\n').map(food => Number(food)).reduce((a, c) => a + c, 0))
    .sort()
    .reverse();
    return arr.slice(0, 3).reduce((a, c) => a + c, 0);
};

module.exports = calories2;
