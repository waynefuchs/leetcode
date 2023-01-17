/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */

let insert = function (intervals, newInterval) {
  let array = [...intervals, newInterval];
  array.sort((a, b) => a[0] - b[0]);

  let result = [array.shift()];
  for (let [start, end] of array) {
    if (result[result.length - 1][1] < start) result.push([start, end]);
    else
      result[result.length - 1][1] = Math.max(
        result[result.length - 1][1],
        end
      );
  }
  return result;
};

// Example 1:
// Input: intervals = [[1,3],[6,9]], newInterval = [2,5]
// Output: [[1,5],[6,9]]
// /*
intervals = [
  [1, 3],
  [6, 9],
];
newInterval = [2, 5];
output = insert(intervals, newInterval);
console.log(output);
// */

// Example 2:
// Input: intervals = [[1,2],[3,5],[6,7],[8,10],[12,16]], newInterval = [4,8]
// Output: [[1,2],[3,10],[12,16]]
// Explanation: Because the new interval [4,8] overlaps with [3,5],[6,7],[8,10]
/*
intervals = [
  [1, 2],
  [3, 5],
  [6, 7],
  [8, 10],
  [12, 16],
];
newInterval = [4, 8];
output = insert(intervals, newInterval);
console.log(output);
*/

// Example 3:
// Input: intervals = [], newInterval = [5,7]
// Output: [[5,7]]
/*
intervals = [];
newInterval = [5, 7];
output = insert(intervals, newInterval);
console.log(output);
*/

// Example 4:
// Input: intervals = [[1,5]], newInterval = [2,7]
// Output: [[1,7]]
/*
intervals = [[1, 5]];
newInterval = [2, 7];
output = insert(intervals, newInterval);
console.log(output);
*/

// Example 5:
// Input: intervals = [[1,5]], newInterval = [2,7]
// Output: [[1,7]]
/*
intervals = [[5, 9]];
newInterval = [2, 7];
output = insert(intervals, newInterval);
console.log(output);
*/
