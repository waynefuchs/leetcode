/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var findSubsequences = function (nums) {
  let result = new Map();
  let sequence = [];

  const backtrack = (index = 0) => {
    if (index == nums.length) {
      if (sequence.length >= 2) result.set(sequence.join(","), [...sequence]);
      return;
    }

    if (sequence.length == 0 || sequence[sequence.length - 1] <= nums[index]) {
      sequence.push(nums[index]);
      backtrack(index + 1);
      sequence.pop();
    }

    backtrack(index + 1);
  };

  backtrack();
  return [...result.values()];
};

let nums;
let result;
// Example 1:
// Input: nums = [4,6,7,7]
// Output: [[4,6],[4,6,7],[4,6,7,7],[4,7],[4,7,7],[6,7],[6,7,7],[7,7]]
nums = [4, 6, 7, 7];
result = findSubsequences(nums);
console.log(result);

// Example 2:
// Input: nums = [4,4,3,2,1]
// Output: [[4,4]]
nums = [4, 4, 3, 2, 1];
result = findSubsequences(nums);
console.log(result);
