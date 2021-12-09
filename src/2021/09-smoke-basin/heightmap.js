const input = require('../../../common').input;

const heightmap = () => {
  let arr = input.split('\n')
    .slice(0, -1);
  let w = arr[0].length;
  let h = arr.length;
  let sum = 0;

  arr = arr.flatMap(line => line.split('')).map(Number);

  for (let i = 0; i < arr.length; i++) {
    const adjacent = [arr[i - w], arr[i + w], arr[i - 1], arr[i + 1]]
      .filter(point => point !== undefined);
    if (adjacent.every(point => point > arr[i])) {
      sum += arr[i] + 1;
    }
  }

  return sum;
};

module.exports = heightmap;
