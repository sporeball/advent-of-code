const input = require("../../../common").input;

const partitioner = () => {
  const passes = input.split("\n");
  var ids = [];
  var row;
  var col;

  for (pass of passes) {
    let ROW_KEY = pass.slice(0, 7);
    let COL_KEY = pass.slice(-3);
    row = 127;
    col = 7;

    for (var i = 0; i < 7; i++) {
      switch (ROW_KEY[i]) {
        case "F":
          row -= 128 >> i + 1;
          break;
        default:
          row += 128 >> i + 1;
      }
    }

    for (var i = 0; i < 3; i++) {
      switch(COL_KEY[i]) {
        case "L":
          col -= 8 >> i + 1;
          break;
        default:
          col += 8 >> i + 1;
      }
    }

    ids.push((row / 2) * 8 + (col / 2));
  }

  return ids.sort((a,b) => b-a)[0];
}

module.exports = partitioner;
