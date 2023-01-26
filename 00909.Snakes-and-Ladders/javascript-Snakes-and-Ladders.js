/**
 * @param {number[][]} board
 * @return {number}
 */
var snakesAndLadders = function (board) {
  let n = board.length;
  let set = new Set();
  let indexConversion = (index) => {
    let row = ((index - 1) / n) | 0;
    let col = (index - 1) % n;
    col = row % 2 == 1 ? n - 1 - col : col;
    row = n - 1 - row;
    return [row, col];
  };
  let q = [[1, 0]];
  while (q.length > 0) {
    const [pos, moves] = q.shift();
    for (let i = 1; i < 7; i++) {
      let newPos = i + pos;
      let [r, c] = indexConversion(newPos);
      if (board[r][c] != -1) newPos = board[r][c];
      if (newPos == n * n) return moves + 1;
      if (!set.has(newPos)) {
        set.add(newPos);
        q.push([newPos, moves + 1]);
      }
    }
  }
  return -1;
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
