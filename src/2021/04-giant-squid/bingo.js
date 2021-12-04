const input = require('../../../common').input;

const bingo = () => {
  let inp = input.split('\n\n');
  // because we will be marking numbers by multiplying them by 1000,
  // we add 1 to every item in the order and on every board,
  // so that a board does not win prematurely by having a 0 in an advantageous spot
  let order = inp[0].split(',').map(Number).map(x => x + 1);
  let boards = inp.slice(1)
    .map(board => board.split('\n').join(' ').split(/ +/).filter(x => x !== '').map(Number).map(x => x + 1));
  let called; // the number that was just called

  while (!boards.some(board => won(board))) { // while no board is winning
    called = order.shift(); // call a number
    boards = boards.map(board => board.map(x => x === called ? x * 1000 : x)); // multiply by 1000 to mark the number
  }

  let w = boards.find(board => won(board));
  w = w.filter(x => x % 1000 !== 0) // remove marked numbers
    .map(x => x - 1); // undo the thing we did at the top
  return w.reduce((a, c) => a + c, 0) * (called - 1);
};

const won = board => board.some((x, i) => // if there is some item on the board
  (
    i % 5 === 0 // which is first in its row
    && board.slice(i, i + 5) // with all items in the same row
      .every(ix => ix % 1000 === 0) // divisible by 1000
  ) || ( // or
    i < 5 // is first in its column
    && board.filter((ix, ii) => i % 5 === ii % 5) // with all items in the same column
      .every(ix => ix % 1000 === 0) // divisible by 1000
  )
);

module.exports = bingo;
