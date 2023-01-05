/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  const roman = { M: 1000, D: 500, C: 100, L: 50, X: 10, V: 5, I: 1 };

  result = 0;
  for (let x = 0; x < s.length; x++) {
    const cur = roman[s[x]];
    const next = roman[s[x + 1]];
    if (cur < next) {
      result += next - cur;
      x++;
    } else {
      result += cur;
    }
  }
  return result;
};

r = romanToInt("MCM");
console.log(r);
