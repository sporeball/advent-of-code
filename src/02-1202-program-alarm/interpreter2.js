const interpreter2 = (input) => {
  var arr = input.split(","); // raw array from input
  var prog = arr.map(Number); // all array elements as integers
  var mem = prog; // computer's memory - starts as a duplicate of prog
  
  var ptr = 0;
  
  for (var i = 0; i < prog.length; i++) {
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