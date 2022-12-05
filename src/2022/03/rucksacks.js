const input = require('../../../common').input;

const rucksacks = () => {
  let sum = input.split('\n')
    .map(rucksack =>
      [rucksack.slice(0, rucksack.length / 2), rucksack.slice(rucksack.length / 2)]
        .map(compartment => compartment.split(''))
    )
    .map(rucksack => rucksack.map((c, i, r) => c.filter(item => r[0].includes(item) && r[1].includes(item))))
    .map(rucksack => rucksack.flat())
    .map(rucksack => rucksack.filter((x, i, r) => r.indexOf(x) === i))
    .flat()
    .map(item => item.charCodeAt(0) - 64)
    .map(priority => priority <= 26 ? priority + 26 : priority - 32)
    .reduce((a, c) => a + c, 0);
  return sum;
};

module.exports = rucksacks;
