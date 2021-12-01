const input = require("../../../common").input;

const counter = () => {
  let arr = input.split('\n');
  let increases = 0;
  for (let i = 1; i < arr.length; i++) {
    if (Number(arr[i]) > Number(arr[i - 1])) {
      increases++;
    }
  }
  return increases;
};

module.exports = counter;
