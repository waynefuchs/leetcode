// I             1
// V             5
// X             10
// L             50
// C             100
// D             500
// M             1000

// I can be placed before V (5) and X (10) to make 4 and 9.
// X can be placed before L (50) and C (100) to make 40 and 90.
// C can be placed before D (500) and M (1000) to make 400 and 900

/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  const romanSubs = { CM: 900, CD: 400, XC: 90, XL: 40, IX: 9, IV: 4 };
  const roman = { M: 1000, D: 500, C: 100, L: 50, X: 10, V: 5, I: 1 };

  result = 0;
  while (s) {
    if (s.length >= 2) {
      const two = s.substring(0, 2);
      if (Object.keys(romanSubs).includes(two)) {
        result += romanSubs[two];
        s = s.substring(2);
        continue;
      }
    }

    const first = s[0];
    result += roman[first];
    s = s.substring(1);
  }

  return result;
};

r = romanToInt("MCM");
console.log(r);
