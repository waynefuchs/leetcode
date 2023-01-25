/**
 * @param {number[][]} board
 * @return {number}
 */
var indexConversion = (n, index) => {
  const row = (n - index / n) | 0;

  // prettier-ignore
  const leftToRight = row % 2 
    ? (n - 1) - (n ** 2 - row * n - index) 
    : n ** 2 - row * n - index;
  // prettier-ignore
  const col = n % 2 
    ? (n - 1) - leftToRight 
    : leftToRight
  return [row, col];
};

// DEBUG
// const n = 5;
// let index = 1;
// let res = [];
// for (let x = 0; x < n; x++) {
//   let tmp = [];
//   for (let y = 0; y < n; y++, index++) {
//     let [row, col] = indexConversion(n, index);
//     tmp.push(`${index}>${row}:${col}`);
//   }
//   if (x % 2) tmp.reverse();
//   res.unshift([...tmp]);
// }
// console.dir(res);

var snakesAndLadders = function (board) {
  // initialize and load board into array
  const boardSize = board.length ** 2 + 1;
  let distances = new Array(boardSize);
  const stack = [1];
  distances[0] = null;
  distances[1] = 0;

  // calculate minimum distance for each square
  while (stack.length) {
    let indexCurrent = stack.pop();
    let moves = distances[indexCurrent] + 1;

    const indexStart = indexCurrent + 1;
    const indexEnd = Math.min(indexCurrent + 6, boardSize);
    for (let i = indexStart; i <= indexEnd; i++) {
      const [row, col] = indexConversion(board.length, i);
      const index = board[row][col] !== -1 ? board[row][col] : i;
      if (!distances[index] || moves < distances[index]) {
        distances[index] = moves;
        stack.push(index);
      }
    }
  }

  let temp = [...distances];
  for (let i = 0; i < board.length; i++) {
    const out = temp.slice(temp.length - board.length);
    console.log(out);
    temp = temp.slice(0, temp.length - board.length);
  }

  // return result
  // const result = distances[boardSize - 1];
  return distances[boardSize - 1];
};

let board;
let result;

// Example 1:
// Input: board = [[-1,-1,-1,-1,-1,-1],[-1,-1,-1,-1,-1,-1],[-1,-1,-1,-1,-1,-1],[-1,35,-1,-1,13,-1],[-1,-1,-1,-1,-1,-1],[-1,15,-1,-1,-1,-1]]
// Output: 4
// Explanation:
// In the beginning, you start at square 1 (at row 5, column 0).
// You decide to move to square 2 and must take the ladder to square 15.
// You then decide to move to square 17 and must take the snake to square 13.
// You then decide to move to square 14 and must take the ladder to square 35.
// You then decide to move to square 36, ending the game.
// This is the lowest possible number of moves to reach the last square, so return 4.

console.log("Example 1 (4):");
board = [
  [-1, -1, -1, -1, -1, -1],
  [-1, -1, -1, -1, -1, -1],
  [-1, -1, -1, -1, -1, -1],
  [-1, 35, -1, -1, 13, -1],
  [-1, -1, -1, -1, -1, -1],
  [-1, 15, -1, -1, -1, -1],
];
result = snakesAndLadders(board);
console.log(result);

// Example 2:
// Input: board = [[-1,-1],[-1,3]]
// Output: 1

// console.log("Example 2 (1):");
// board = [
//   [-1, -1],
//   [-1, 3],
// ];
// result = snakesAndLadders(board);
// console.log(result);

// Example 3
// Expected Output: 2
console.log("Example 3 (2):");
board = [
  [-1, -1, 19, 10, -1],
  [2, -1, -1, 6, -1],
  [-1, 17, -1, 19, -1],
  [25, -1, 20, -1, -1],
  [-1, -1, -1, -1, 15],
];
result = snakesAndLadders(board);
console.log(result);
