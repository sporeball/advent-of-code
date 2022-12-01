const input = require('../../../common').input;

const calories = () => {
  let arr = input.split('\n\n')
    .map(elf => elf.split('\n').map(food => Number(food)).reduce((a, c) => a + c, 0))
    .sort()
    .reverse();
    return Math.max(...arr);
};

module.exports = calories;
