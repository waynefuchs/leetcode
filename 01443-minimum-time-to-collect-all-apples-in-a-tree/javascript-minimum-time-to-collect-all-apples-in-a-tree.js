// https://leetcode.com/problems/minimum-time-to-collect-all-apples-in-a-tree/description/
// https://leetcode.com/problems/minimum-time-to-collect-all-apples-in-a-tree/solutions/2864715/minimum-time-to-collect-all-apples-in-a-tree/
// https://www.youtube.com/watch?v=-A6hkNg7FN0

// The following code does not take bi-directionality into consideration (error)

/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {boolean[]} hasApple
 * @return {number}
 */
// var minTime = function (n, edges, hasApple) {
//   // Build the tree
//   let tree = {};
//   for (const [parent, child] of edges) {
//     if (!tree[child])
//       tree[child] = { parent: null, traveled: false, hasApple: false };
//     tree[child].parent = parent;
//     tree[child].hasApple = hasApple[child];
//   }

//   // Traverse the tree starting from every tree that has apples, and working back to the root node
//   // If I encounter a node I've already traveled, I go to the next tree with apples
//   let apples = Object.keys(tree).filter((i) => tree[i].hasApple);
//   for (let i of apples) {
//     while (i in tree) {
//       if (tree[i].traveled) break;
//       tree[i].traveled = true;
//       i = tree[i].parent;
//     }
//   }

//   // Count all the nodes that were traveled
//   let walked = Object.keys(tree).filter((i) => tree[i].traveled);
//   return walked.length * 2;
// };

var minTime = function (n, edges, hasApple) {
  let map = {};
  for (const [x, y] of edges) map[y] = x;

  let res = 0;
  let check = {};
  for (let i = 1; i < hasApple.length; i++) {
    if (hasApple[i]) {
      let curV = i;
      while (curV != 0 && !check[curV]) {
        res += 2;
        check[curV] = true;
        curV = map[curV];
      }
    }
  }
  return res;
};

// n = 7;
// edges = [
//   [0, 1],
//   [0, 2],
//   [1, 4],
//   [1, 5],
//   [2, 3],
//   [2, 6],
// ];
// hasApple = [false, false, true, false, false, true, false];

n = 4;
edges = [
  [0, 2],
  [0, 3],
  [1, 2],
];
hasApple = [false, true, false, false];
let res = minTime(n, edges, hasApple);
console.dir(res);
