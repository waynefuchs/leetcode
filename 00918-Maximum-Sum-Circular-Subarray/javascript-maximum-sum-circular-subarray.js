/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubarraySumCircular = function (nums) {
  const min = Math.min(...nums);
  const offset = min < 0 ? -min : 0;
  const doubled = [...nums, ...nums].map((v) => v + offset);
  doubled.pop();

  let maxSum = Number.NEGATIVE_INFINITY;
  let currentSum = 0;

  for (const num of doubled) {
    currentSum = Math.max(0, currentSum + num);
    maxSum = Math.max(currentSum, maxSum);
  }
  return maxSum - offset;
};

let nums;
let result;
// Example 1:
// Input: nums = [1,-2,3,-2]
// Output: 3
// Explanation: Subarray [3] has maximum sum 3.
nums = [1, -2, 3, -2];
result = maxSubarraySumCircular(nums);
console.log(result);

// Example 2:
// Input: nums = [5,-3,5]
// Output: 10
// Explanation: Subarray [5,5] has maximum sum 5 + 5 = 10.
// 5, -3, 5, 5, -3,
nums = [5, -3, 5];
result = maxSubarraySumCircular(nums);
console.log(result);

// Example 3:
// Input: nums = [-3,-2,-3]
// Output: -2
// Explanation: Subarray [-2] has maximum sum -2.
nums = [-3, -2, -3];
result = maxSubarraySumCircular(nums);
console.log(result);
