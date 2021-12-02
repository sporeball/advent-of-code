const input = require("../../../common").input;

const calculator = () => {
  let x = 0;
  let y = 0;
  let arr = input.split('\n');
  for (let i = 0; i < arr.length; i++) {
    let n = Number(arr[i].slice(arr[i].indexOf(' ') + 1));
    switch (arr[i].slice(0, 1)) {
      case 'f':
        x += n;
        break;
      case 'u':
        y -= n;
        break;
      case 'd':
        y += n;
        break;
    }
  }
  return x * y;
};

module.exports = calculator;
