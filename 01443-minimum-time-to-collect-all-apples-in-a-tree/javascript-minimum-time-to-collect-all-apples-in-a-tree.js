// https://leetcode.com/problems/minimum-time-to-collect-all-apples-in-a-tree/description/
// https://www.youtube.com/watch?v=-A6hkNg7FN0
// https://leetcode.com/problems/minimum-time-to-collect-all-apples-in-a-tree/solutions/2864715/minimum-time-to-collect-all-apples-in-a-tree/
/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {boolean[]} hasApple
 * @return {number}
 */
var minTime = function (n, edges, hasApple) {
  let tree = {};
  for(const [parent, child] of edges) {
    if()
  }  
};

n = 7;
edges = [
  [0, 1],
  [0, 2],
  [1, 4],
  [1, 5],
  [2, 3],
  [2, 6],
];
hasApple = [false, false, true, false, false, true, false];
res = minTime(n, edges, hasApple);
console.log(res);
