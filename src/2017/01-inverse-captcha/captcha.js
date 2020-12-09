const input = require("../../../common").input;

const captcha = () => input.split("")
  .map(Number)
  .reduce((a, c, i, r) => a +
    (r[i] == (r[i + 1] || r[0])
    ? r[i]
    : 0
  ), 0);

module.exports = captcha;
