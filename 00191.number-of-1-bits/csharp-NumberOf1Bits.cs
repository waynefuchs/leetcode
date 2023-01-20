
// Solution from discussion: 26ms
// System.Numerics looks interesting...
public class Solution {
    public int HammingWeight(uint n) =>
        System.Numerics.BitOperations.PopCount(n);
}


/* My solution: 27ms
public class Solution {
    public int HammingWeight(uint n) {
        uint mask = 1;
        int count = 0;
        for(int i = 0; i < 32; i++) {
            count += (n & mask) != 0 ? 1 : 0;
            mask = mask << 1;
        }
        return count;
    }
}
*/
