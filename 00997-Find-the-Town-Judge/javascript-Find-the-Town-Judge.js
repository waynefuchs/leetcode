/**
 * @param {number} n
 * @param {number[][]} trust
 * @return {number}
 */
var findJudge = function (n, trust) {
  // Initialize the graph
  const trustGraph = new Map();
  for (let i = 1; i <= n; i++) {
    const person = new Map();
    person.set("trusts", new Set());
    person.set("trustedBy", new Set());
    trustGraph.set(i, person);
  }

  // Building the graph
  for (const link of trust) {
    trustGraph.get(link[0]).get("trusts").add(link[1]);
    trustGraph.get(link[1]).get("trustedBy").add(link[0]);
  }

  // Find the judge, if one exists
  const nKeys = [...trustGraph.keys()];
  const judge = nKeys.filter(
    (key) => trustGraph.get(key).get("trusts").size === 0
  );
  if (judge.length !== 1) return -1;

  const potentialJudgeTrustedBy = trustGraph.get(judge[0]).get("trustedBy");
  return potentialJudgeTrustedBy.size === n - 1 &&
    !potentialJudgeTrustedBy.has(judge[0])
    ? judge[0]
    : -1;
};

let n;
let trust;
let result;
// Example 1:
// Input: n = 2, trust = [[1,2]]
// Output: 2
n = 2;
trust = [[1, 2]];
result = findJudge(n, trust);
console.log("Example 1:");
console.log(result);

// Example 2:
// Input: n = 3, trust = [[1,3],[2,3]]
// Output: 3
n = 3;
trust = [
  [1, 3],
  [2, 3],
];
result = findJudge(n, trust);
console.log("Example 2:");
console.log(result);

// Example 3:
// Input: n = 3, trust = [[1,3],[2,3],[3,1]]
// Output: -1
n = 3;
trust = [
  [1, 3],
  [2, 3],
  [3, 1],
];
result = findJudge(n, trust);
console.log("Example 3:");
console.log(result);
