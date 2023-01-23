/**
 * @param {number} n
 * @param {number[][]} trust
 * @return {number}
 */
var findJudge = function (n, trust) {
  // initialize the trustcount array
  const trustCount = new Array(n + 1); /// [0, 1 ... n]
  for (let i = 1; i <= n; i++) trustCount[i] = 0;

  // populate count
  for (const [truster, trustee] of trust) {
    trustCount[trustee]++;
    trustCount[truster]--;
  }

  // check for the judge
  for (let i = 1; i <= n; i++) if (trustCount[i] === n - 1) return i;
  return -1;
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
