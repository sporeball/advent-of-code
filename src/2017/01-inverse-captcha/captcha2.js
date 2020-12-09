const input = require("../../../common").input;

const captcha2 = () => input.split("")
  .map(Number)
  .reduce((a, c, i, r) => a +
    (r[i] == (r[i + (r.length / 2)] || r[(i + (r.length / 2)) % r.length])
    ? r[i] : 0
  ), 0);

module.exports = captcha2;
