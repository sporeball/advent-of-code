const input = require("../../../common").input;

const interpreter2 = () => {
  var arr = input.split(","); // raw array from input

  var prog = arr.map(Number); // all array elements as integers

  var n = 0;
  var v = 0;
  var stop = false; // halt flag

  for (var i = 0; i < 100; i++) {
    for (var j = 0; j < 100; j++) {
      prog = arr.map(Number); // reset

      var mem = prog; // computer's memory - starts as a duplicate of prog
      mem[1] = i;
      mem[2] = j;

      var result = parse(prog, mem);
      if (result == 19690720) {
        n = i;
        v = j;
        stop = true;
        break;
      }
    }
    if (stop) {
      break;
    }
  }

  return (100 * n) + v;
}

function parse(prog, mem) {
  var ptr = 0;

  for (int of prog) {
    if (prog[ptr] == 1) {
      mem[prog[ptr + 3]] = mem[prog[ptr + 1]] + mem[prog[ptr + 2]];
    } else if (prog[ptr] == 2) {
      mem[prog[ptr + 3]] = mem[prog[ptr + 1]] * mem[prog[ptr + 2]];
    } else if (prog[ptr] == 99) {
      break;
    } else {

    }

    ptr += 4;
  }

  return mem[0];
}

module.exports = interpreter2;
