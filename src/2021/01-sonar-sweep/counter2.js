const input = require("../../../common").input;

const counter = () => {
  let arr = input.split('\n');
  let increases = 0;
  for (let i = 1; i < arr.length - 2; i++) {
    let now = Number(arr[i]) + Number(arr[i + 1]) + Number(arr[i + 2]);
    let last = Number(arr[i - 1]) + Number(arr[i]) + Number(arr[i + 1]);
    if (now > last) {
      increases++;
    }
  }
  return increases;
};

module.exports = counter;
