const input = require('../../../common').input;

const simulator = () => {
  let lanternfish = input.split(',').map(Number);
  let days = 80;

  for (let day = 0; day < days; day++) {
    lanternfish = lanternfish.flatMap(fish => {
      if (fish === 0) {
        return [6, 8];
      } else {
        return fish - 1;
      }
    });
  }
  
  return lanternfish.length;
};

module.exports = simulator;
