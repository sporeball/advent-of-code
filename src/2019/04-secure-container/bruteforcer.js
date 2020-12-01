const bruteforcer = () => {
  var matches = 0;
  for (var i = 153517; i < 630396; i++) {
    if (check(i)) {
      matches++;
    }
  }
  
  return matches;
}

function check(n) {
  var str = n.toString();
  var arr = str.split("");
  
  var adjacents = false; // are at least two adjacent digits the same?
  var noDecrease = true; // does the number never decrease?
  
  for (var i = 0; i < 5; i++) {
    if (Number(arr[i]) == Number(arr[i + 1])) {
      adjacents = true;
    }
  }
  
  for (var i = 0; i < 5; i++) {
    if (Number(arr[i]) > Number(arr[i + 1])) {
      noDecrease = false;
    }
  }
  
  if (adjacents == false || noDecrease == false) {
    return false;
  } else {
    return true;
  }
}

module.exports = bruteforcer;