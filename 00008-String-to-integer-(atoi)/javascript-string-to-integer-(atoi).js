/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function (s) {
  let positive = true;
  // Clean input
  // Remove Spaces
  let arr = s.split("").filter((v) => v != " ");
  // Check whether negative or positive
  for (let i = 0; i < arr.length; i++) {
    // Checking 1-9, ignoring leading 0's (48)
    if (arr[i].charCodeAt(i) >= 49 && arr[i].charCodeAt(0) <= 57) break;
    if (arr[i] === "-") {
      positive = false;
      break;
    }
  }
  // Remove everything but numbers
  arr = arr.filter((v) => v.charCodeAt(0) >= 48 && v.charCodeAt(0) <= 57);
  // Remove leading 0's
  while (arr[0] === "0") arr.shift();

  // +2147483648
  // -2147483648
  // Quickly clamp numbers that are far out of bounds (-2^31 -> 2^31)
  if (arr.length > 10) return positive ? 2147483648 : -2147483648;

  // calculate value
  let result = 0;
  for (let i = arr.length - 1, p = 0; i >= 0; i--, p++) {
    result += (arr[i].charCodeAt(0) - 48) * 10 ** p;
  }

  // Do a second check to clamp the out of bounds
  if (result > 2147483648) return positive ? 2147483648 : -2147483648;

  // return the result
  return positive ? result : -result;
};

n = myAtoi("  lol -             43 with words!");
console.log(n);
