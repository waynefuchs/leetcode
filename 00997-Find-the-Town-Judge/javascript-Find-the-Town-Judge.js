/**
 * @param {number} n
 * @param {number[][]} trust
 * @return {number}
 */
var findJudge = function (n, trust) {
  // Initialize Trust
  // For the cost of the memory of an additional Number,
  //    'off by one' calculations are not necessary
  const trustCount = new Array(n + 1);
  for (let i = 1; i <= n; i++) trustCount[i] = 0;

  // Build Trust Result
  for (const [truster, trustee] of trust) {
    // this decriment ensures that:
    //    if a person trusts another, the final check below will fail
    trustCount[truster]--;
    trustCount[trustee]++;
  }

  // check if both conditions are met and the judge exists in this graph-link array
  for (let person = 1; person <= n; person++)
    if (trustCount[person] === n - 1) return person;
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
