// Not great
// Runtime 192ms    (22.95%)
// Memory 49.1 MB   (30.50%)

/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (s, numRows) {
  let output;
  (output = []).length = numRows;
  for (let x = 0; x < numRows; x++) output[x] = [];

  for (let index = 0; index < s.length; ) {
    for (let x = 0; x < numRows && index < s.length; x++, index++)
      output[x].push(s[index]);
    for (let x = numRows - 2; x > 0 && index < s.length; x--, index++)
      output[x].push(s[index]);
  }

  return output.reduce((pv, v) => pv + v.join(""), "");
};

// INPUT: PAYPALISHIRING
// PROCESSING:
//    P   A   H   N
//    A P L S I I G
//    Y   I   R
// OUTPUT: 'PAHNAPLSIIGYIR'
const m = convert("PAYPALISHIRING", 3);
console.log(m);
