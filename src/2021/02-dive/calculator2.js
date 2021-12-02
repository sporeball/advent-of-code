const input = require("../../../common").input;

const calculator2 = () => {
  let x = 0;
  let y = 0;
  let aim = 0;
  let arr = input.split('\n');
  for (let i = 0; i < arr.length; i++) {
    let n = Number(arr[i].slice(arr[i].indexOf(' ') + 1));
    switch (arr[i].slice(0, 1)) {
      case 'f':
        x += n;
        y += (aim * n);
        break;
      case 'u':
        aim -= n;
        break;
      case 'd':
        aim += n;
        break;
    }
  }
  return x * y;
};

module.exports = calculator2;
