const interpreter = (input) => {
  var arr = input.split(",");
  var code = arr.map(Number);
  var ptr = 0;
  
  for (var i = 0; i < code.length; i++) {
    if (code[ptr] == 1) {
      code[code[ptr + 3]] = code[code[ptr + 1]] + code[code[ptr + 2]];
    } else if (code[ptr] == 2) {
      code[code[ptr + 3]] = code[code[ptr + 1]] * code[code[ptr + 2]];
    } else if (code[ptr] == 99) {
      break;
    } else {
      
    }
    
    ptr += 4;
  }
  
  return code[0];
}

module.exports = interpreter;