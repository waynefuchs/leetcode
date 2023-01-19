/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraysDivByK = function (nums, k) {
  // Generate result array and preload values
  const modResult = new Array(k);
  for (let i = 1; i < k; i++) modResult[i] = 0;
  modResult[0] = 1;

  // Calculate prefix sum and answer
  let sum = 0;
  let answer = 0;
  for (n of nums) {
    sum += n;
    const index = ((sum % k) + k) % k;
    answer += modResult[index]++;
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

// Example 2:
// Input: nums = [5], k = 9
// Output: 0
nums = [5];
k = 9;
result = subarraysDivByK(nums, k);
console.log(`result: ${result}`);

// Example 3:
// Input: nums = [1,2,3,4,5], k = 3
// Output: 7
nums = [1, 2, 3, 4, 5];
k = 3;
result = subarraysDivByK(nums, k);
console.log(`result: ${result}`);
