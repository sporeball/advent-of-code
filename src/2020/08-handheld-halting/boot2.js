const input = require("../../../common").input;
var index = 0;
var acc = 0;

const boot2 = () => {
  const instructions = input.split("\n")
    .map(x => [x, false]);

  // indexes where the instruction is either "jmp" or "nop"
  const jorn = instructions.flatMap((x, i) => x[0].slice(0, 3) == "jmp" || x[0].slice(0, 3) == "nop" ? i : [])

  for (index of jorn) {
    var insts = input.split("\n")
      .map(x => [x, false]);
    if (insts[index][0].slice(0, 3) == "jmp") {
      insts[index][0] = insts[index][0].replace("jmp", "nop");
    } else {
      insts[index][0] = insts[index][0].replace("nop", "jmp");
    }

    var res = parse(insts);
    if (res !== null) return res;
  }
}

parse = instructions => {
  index = 0;
  acc = 0;
  while (index < instructions.length) {
    var instruction = instructions[index];
    if (instruction[1] == true) return null;
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

module.exports = boot2;
