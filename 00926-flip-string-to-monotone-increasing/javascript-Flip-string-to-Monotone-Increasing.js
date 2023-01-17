// Speed: 	> 86.36%
// Memory:	> 97.73

/**
 * @param {string} s
 * @return {number}
 */
var minFlipsMonoIncr = function (s) {
  let m = 0;
  for(let i = 0; i < s.length; i++) if(s[i] === "0") m++;
  let ans = m;
  for (const c of s) {
    if (c === "0") ans = Math.min(ans, --m);
    else m++;
  }
  return ans;
};

let result;
//Example 1:
// Input: s = "00110"
// Output: 1
// Explanation: We flip the last digit to get 00111.
result = minFlipsMonoIncr("00110");
console.log(`Example1 result: ${result}`);

// Example 2:
// Input: s = "010110"
// Output: 2
// Explanation: We flip to get 011111, or alternatively 000111.
result = minFlipsMonoIncr("010110");
console.log(`Example2 result: ${result}`);

// Example 3:
// Input: s = "00011000"
// Output: 2
// Explanation: We flip to get 00000000.
result = minFlipsMonoIncr("00110000");
console.log(`Example3 result: ${result}`);
