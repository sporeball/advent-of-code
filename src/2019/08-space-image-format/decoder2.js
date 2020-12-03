const input = require("../../../common").input;

const decoder2 = () => {
  var layers = input.match(/.{1,150}/g);
  var data = [];
  var ptr = 0;

  for (var i = 0; i < 150; i++) {
    for (var j = 0; j < layers.length; j++) {
      if (layers[j].slice(i, i + 1) == 0 || layers[j].slice(i, i + 1) == 1) {
        data.push(layers[j].slice(i, i + 1));
        break;
      }
    }
  }

  for (var i = 0; i < 6; i++) {
    var row = "";
    for (var j = 0; j < 25; j++) {
      if (data[ptr] == 0) {
        row += " ";
      } else if (data[ptr] == 1) {
        row += "■";
      } else {
        row += "⸬";
      }

      ptr++;
    }
    console.log(row);
  }

  return;
}

module.exports = decoder2;
