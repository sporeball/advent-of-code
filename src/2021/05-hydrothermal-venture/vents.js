const input = require('../../../common').input;

/**
 * @param {boolean} [diag] whether to count diagonal lines
 */
const vents = diag => {
  let segs = input.split('\n')
    .map(seg => seg.replace(' -> ', ',').split(',').map(Number))
    .slice(0, -1);
  let field = Array(1000000).fill(0);

  if (!diag) {
    segs = segs.filter(seg => seg[0] === seg[2] || seg[1] === seg[3]);
  }
  
  for (const seg of segs) {
    let [x1, y1, x2, y2] = seg;
    while (x1 !== x2 || y1 !== y2) {
      field[(y1 * 1000) + x1]++;
      x1 += Math.sign(x2 - x1);
      y1 += Math.sign(y2 - y1);
    }
    // last one
    field[(y1 * 1000) + x1]++;
  }

  return field.filter(x => x >= 2).length;
};

module.exports = vents;
