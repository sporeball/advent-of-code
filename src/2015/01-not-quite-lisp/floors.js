const input = require("../../../common").input;

const floors = () => (input.match(/\(/g) || []).length - (input.match(/\)/g) || []).length;

module.exports = floors;
