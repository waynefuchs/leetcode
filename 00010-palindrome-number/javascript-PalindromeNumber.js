/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  // Conversion to string is not allowed by the 'Follow-Up'
  // return Number(x.toString().split('').reverse().join('')) === Number(x);
  if (x < 0) return false;
  if (x % 10 == 0 && x != 0) return false;

  let revertedNumber = 0;
  while (x > revertedNumber) {
    revertedNumber = (revertedNumber * 10 + (x % 10)) | 0;
    x = (x / 10) | 0;
  }

  return revertedNumber == x || ((revertedNumber / 10) | 0) == x;
};
