/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraysDivByK = function (nums, k) {
  let prefixSums = [...new Array(k)].map((v) => 0);
  prefixSums[0] = 1;
  let sum = 0;
  let answer = 0;
  for (const n of nums) {
    sum += n;
    const index = ((sum % k) + k) % k;
    answer += prefixSums[index];
    prefixSums[index]++;
  }
  return answer;
};

let nums;
let k;
let result;
// Example 1:
// Input: nums = [4,5,0,-2,-3,1], k = 5
// Output: 7
// Explanation: There are 7 subarrays with a sum divisible by k = 5:
// [4, 5, 0, -2, -3, 1], [5], [5, 0], [5, 0, -2, -3], [0], [0, -2, -3], [-2, -3]
nums = [4, 5, 0, -2, -3, 1];
k = 5;
result = subarraysDivByK(nums, k);
console.log(`result: ${result}`);

/*
input:  4,  5,  0,  -2, -3, 1
sum     4   9   9   7   4   5
sum%k   4   4   4   2   4   0

formula: (i*(i-1))/2
index   0 1 2 3 4   <-- "i" for index / remainder
count[] 1 0 1 0 4   <-- "c" for count
formula 0 0 1 0 6
sum of formula: 7
*/

// Example 2:
// Input: nums = [5], k = 9
// Output: 0
nums = [5];
k = 9;
result = subarraysDivByK(nums, k);
console.log(`result: ${result}`);
