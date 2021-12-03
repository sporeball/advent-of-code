const input = require('../../../common').input;

const rates = () => {
  let arr = input.split('\n');
  let oxy = parseInt(recurseOxy(arr), 2);
  let diox = parseInt(recurseDiox(arr), 2);
  return oxy * diox;
};

const recurseOxy = (arr, i = 0) => {
  if (arr.length === 1) {
    return arr[0];
  } else {
    let now = arr.map(x => x[i])
      .join('');
    let filt = (now.split(0).length - 1 <= now.split(1).length - 1)
      ? '1'
      : '0';
    return recurseOxy(
      arr.filter(x => x[i] === filt),
      i + 1
    );
  }
};

const recurseDiox = (arr, i = 0) => {
  if (arr.length === 1) {
    return arr[0];
  } else {
    let now = arr.map(x => x[i])
      .join('');
    let filt = (now.split(0).length - 1 <= now.split(1).length - 1)
      ? '0'
      : '1';
    return recurseDiox(
      arr.filter(x => x[i] === filt),
      i + 1
    );
  }
};

module.exports = rates;
