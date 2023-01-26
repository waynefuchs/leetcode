/**
 * @param {number[]} edges
 * @param {number} node1
 * @param {number} node2
 * @return {number}
 */
var closestMeetingNode = function (edges, node1, node2) {
  let n = edges.length;
  let map1 = new Array(n);
  let map2 = new Array(n);
  for (let i = 0; i < n; i++) {
    map1[i] = -1;
    map2[i] = -1;
  }
  map1[node1] = 0;
  map2[node2] = 0;

  while (edges[node1] != -1 && map1[edges[node1]] == -1) {
    map1[edges[node1]] = map1[node1] + 1;
    node1 = edges[node1];
  }

  while (edges[node2] != -1 && map2[edges[node2]] == -1) {
    map2[edges[node2]] = map2[node2] + 1;
    node2 = edges[node2];
  }

  let result = n;
  let node = -1;
  for (let i = 0; i < n; i++) {
    if (map1[i] == -1 || map2[i] == -1) continue;
    let val = Math.max(map1[i], map2[i]);
    if (result > val) {
      result = val;
      node = i;
    }
  }
  return node;
};

let input;
let node1;
let node2;
let result;

// Example 1
// Input: edges = [2,2,3,-1], node1 = 0, node2 = 1
// Output: 2
// Explanation: The distance from node 0 to node 2 is 1, and the distance from node 1 to node 2 is 1.
// The maximum of those two distances is 1. It can be proven that we cannot get a node with a smaller maximum distance than 1, so we return node 2.
console.log("Example 1:");
edges = [2, 2, 3, -1];
node1 = 0;
node2 = 1;
result = closestMeetingNode(edges, node1, node2);
console.log(result);

// Example 2:
// Input: edges = [1,2,-1], node1 = 0, node2 = 2
// Output: 2
// Explanation: The distance from node 0 to node 2 is 2, and the distance from node 2 to itself is 0.
// The maximum of those two distances is 2. It can be proven that we cannot get a node with a smaller maximum distance than 2, so we return node 2.
console.log("Example 2:");
edges = [1, 2, -1];
node1 = 0;
node2 = 2;
result = closestMeetingNode(edges, node1, node2);
console.log(result);
