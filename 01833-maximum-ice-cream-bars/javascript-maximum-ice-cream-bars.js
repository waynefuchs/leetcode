/**
 * @param {number[]} costs
 * @param {number} coins
 * @return {number}
 */
var maxIceCream = function (costs, coins) {
  costs.sort((a, b) => a - b);
  let purchased = 0;
  for (let index = 0; index < costs.length; index++) {
    coins -= costs[index];
    if (coins < 0) break;
    purchased++;
  }
  return purchased;
};
