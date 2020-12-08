const input = require("../../../common").input;
var index = 0;
var acc = 0;

const boot = () => {
  const instructions = input.split("\n")
    .map(x => [x, false]);

  while (index < instructions.length) {
    var instruction = instructions[index];
    if (instruction[1] == true) break;
    switch (instruction[0].slice(0, 3)) {
      case "acc":
        acc += +(instruction[0].slice(4));
        index++;
        break;
      case "jmp":
        index += +(instruction[0].slice(4));
        break;
      case "nop":
        index++;
    }
    instruction[1] = true;
  }

  return acc;
}

module.exports = boot;
