let sortDescending = (a, b) => b.length - a.length;
let isPalindrome = (s) => {
  const odd = s.length % 2;
  const halfwayPoint = (s.length / 2) | 0;
  for(let left = 0; left < halfwayPoint; left++) {
    if(s[left] !== s[s.length - left - 1]) return false;
  }
  return true;
}

/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  if(s.length <= 0) return false;
  if(s.split('').filter(a => a === s[0]).join('').length === s.length) return s;

  let palindromeList = [];
  let bestMatchLength = 0;
  for(let left=0; left < s.length && (s.length - left) > bestMatchLength; left++) {
    for(let right=s.length; right > left && (right - left) > bestMatchLength; right--) {
      let substring = s.substring(left, right);
      if(isPalindrome(substring)) {
        palindromeList.push(substring);
        bestMatchLength = right - left;
      }
    }
  }
  palindromeList.sort(sortDescending);
  return palindromeList[0];
};


testcase = "yfikrcvmuegdciuqahlsjesplljlswxaejgdzhubzqkiroxyhtjvazcwcnsvdzjiainmiyobyfclyugttaswlntwukkfbebcdaxdpaxwqenkxxphxdcgrnpruoaetvunwyskswvvmjmltncsdukwzlpfodhgxkjvzppwpvmqlfbojgbdiryleskemhjfoxxzjqihcykpgzhaugwwbqtddjzpmrgdncgzsttqenmbnnavfjkiennwxtguywoaiuungqpyfcffzmljfianapawiayywuvazrnxouvndzqbmmyntkkdyykgodjbeojtpnsyhfrltuazgznddaaibupephvgrcjpzvjttmhtnydwvrpgijselaukwrcosxpcbptebalkheymuyblffahvbszotmutmmqhlgoskuoejvavlprvgyozpylsnqhqrnqpabgbwzwxyibpmsauxcfnbtwwbosksuzqzmobijytxxtyjibomzqzusksobwwtbnfcxuasmpbiyxwzwbgbapqnrqhqnslypzoygvrplvavjeouksoglhqmmtumtozsbvhafflbyumyehklabetpbcpxsocrwkualesjigprvwdynthmttjvzpjcrgvhpepubiaaddnzgzautlrfhysnptjoebjdogkyydkktnymmbqzdnvuoxnrzavuwyyaiwapanaifjlmzffcfypqgnuuiaowyugtxwnneikjfvannbmneqttszgcndgrmpzjddtqbwwguahzgpkychiqjzxxofjhmekselyridbgjobflqmvpwppzvjkxghdofplzwkudscntlmjmvvwsksywnuvteaourpnrgcdxhpxxkneqwxapdxadcbebfkkuwtnlwsattguylcfyboyimniaijzdvsncwczavjthyxorikqzbuhzdgjeaxwsljllpsejslhaquicdgeumvcrkify";
const m = longestPalindrome(testcase);
console.log(m);