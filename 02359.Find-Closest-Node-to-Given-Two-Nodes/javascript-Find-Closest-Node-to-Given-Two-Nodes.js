/**
 * @param {number[]} edges
 * @param {number} node1
 * @param {number} node2
 * @return {number}
 */
var closestMeetingNode = function (edges, node1, node2) {
  const route1 = new Array(edges.length);
  const route2 = new Array(edges.length);
  for (let i = 0; i < edges.length; i++) {
    route1[i] = -1;
    route2[i] = -1;
  }
  route1[node1] = 0;
  route2[node2] = 0;

  // prettier-ignore
  while(edges[node1] !== -1             // this node is not a leaf node
    && route1[edges[node1]] === -1) {   // && have not visited before (cycle)
    // set the map array value of the next edge equal to the current count + 1
    route1[edges[node1]] = route1[node1] + 1;
    // move the node position to the next node for the next iteration
    node1 = edges[node1] 
  }

  // Repeat for node 2
  // prettier-ignore
  while(edges[node2] !== -1
    && route2[edges[node2]] === -1) {
    route2[edges[node2]] = route2[node2] + 1;
    node2 = edges[node2] 
  }

  // iterate over routes
  let maximum = edges.length;
  let index = -1;
  for (let i = 0; i < edges.length; i++) {
    // skip unvisited pairs
    if (route1[i] === -1 || route2[i] === -1) continue;
    // get maximum value between distances (node1->center && node2->center)
    const value = Math.max(route1[i], route2[i]);
    if (value < maximum) {
      // value is the minimum of maximums, set return data
      maximum = value;
      index = i;
    }
  }

  // result
  return index;
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
