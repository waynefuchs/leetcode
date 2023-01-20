// Kadane's Algorithm
function kadane(nums) {
  let curSum = 0;
  let maxSum = Number.NEGATIVE_INFINITY;
  for (i of nums) {
    curSum = Math.max(0, curSum) + i;
    maxSum = Math.max(curSum, maxSum);
  }
  return maxSum;
}
