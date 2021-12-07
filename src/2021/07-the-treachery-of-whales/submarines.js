const input = require('../../../common').input;

const submarines = () => {
  let arr = input.split(',');
  let minPosition = 1e9;
  let minFuel = 1e9;
  for (let i = 0; i < Math.max(...arr); i++) {
    let fuel = arr.map(x => Math.abs(x - i)).reduce((a, c) => a + c, 0);
    if (fuel < minFuel) {
      minFuel = fuel;
      minPosition = i;
    }
  }
  return minFuel;
};

module.exports = submarines;
