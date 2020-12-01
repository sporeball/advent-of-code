const decoder = (input) => {
  var layers = input.match(/.{1,150}/g);
  var leastZeroes = 999;
  var targetLayer = 0;
  
  for (var i = 0; i < layers.length; i++) {
    if ((layers[i].match(/0/g) || []).length < leastZeroes) {
      leastZeroes = (layers[i].match(/0/g) || []).length;
      targetLayer = i;
    }
  }
  
  var ones = (layers[targetLayer].match(/1/g) || []).length;
  var twos = (layers[targetLayer].match(/2/g) || []).length;
  return ones * twos;
}

module.exports = decoder;