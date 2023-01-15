// Copied from:
// https://leetcode.com/problems/minimum-time-to-collect-all-apples-in-a-tree/solutions/3033321/javascript-beats-100/
//
// The problem description is not complete
/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {boolean[]} hasApple
 * @return {number}
 */
function minTime(n, edges, hasApple) {
  // This checks if there are no apples in the tree return 0
  if (edges.filter((v) => v).length === 0) return 0;

  // Create an array of arrays that is 'n' in length
  const adjList = new Array(n);
  for (let i = 0; i < n; i++) adjList[i] = [];
  // Create an adjacency list to represent the tree
  for (const [a, b] of edges) {
    adjList[a].push(b);
    adjList[b].push(a);
  }

  // Helper function to dfs through the tree
  // (depth first search)
  function dfs(node, parent) {
    let time = 0;
    for (const child of adjList[node]) {
      if (child !== parent) {
        time += dfs(child, node);
      }
    }
    // If the current node has an apple or if one of its children has an apple, we need to visit this node
    if (hasApple[node] || time > 0) {
      time += 2;
    }
    return time;
  }

  // Start the dfs at the root node (vertex 0)
  return dfs(0, -1) - 2;
}
