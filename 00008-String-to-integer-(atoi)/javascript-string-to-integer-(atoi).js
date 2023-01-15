/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function (s) {
  let index = 0;
  let positive = true;
  let result = 0;

  // 1. Read in and ignore any leading whitespace.
  s = s.trim();

  // 2. Check if the next character (if not already at the end of the string) is '-' or '+'.
  //    Read this character in if it is either.
  //    This determines if the final result is negative or positive respectively.
  //    Assume the result is positive if neither is present.
  if (s[index] === "-" || s[index] === "+") {
    positive = s[index] !== "-";
    index++;
  }

  // 3. Read in next the characters until the next non-digit character or the end of the input is reached.
  //    The rest of the string is ignored.
  //
  // Steps 3 & 4 can be combined
  //
  // 4. Convert these digits into an integer (i.e. "123" -> 123, "0032" -> 32).
  //    If no digits were read, then the integer is 0.
  //    Change the sign as necessary (from step 2).
  for (; index < s.length; index++) {
    // shift ascii offset by 48 ("0")
    const code = s.charCodeAt(index) - 48;
    // end conversion if a non-number character is found
    if (code < 0 || code > 9) break;
    // perform step 4
    result *= 10;
    result += code;
  }

  // 5. If the integer is out of the 32-bit signed integer range [-231, 231 - 1], then clamp the integer so that it remains in the range.
  //    Specifically, integers less than -2^31 should be clamped to -2^31, and integers greater than 231 - 1 should be clamped to 231 - 1.
  if (positive ? result > 2147483647 : result > 2147483648)
    return positive ? 2147483647 : -2147483648;

  // 6. Return the integer as the final result.
  if (result === 0) return 0;
  return positive ? result : -result;
};

n = myAtoi("               -123443 with words!");
console.log(n);
