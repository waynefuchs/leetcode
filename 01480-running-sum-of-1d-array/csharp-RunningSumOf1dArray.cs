public class Solution {
    
    public int[] RunningSum(int[] nums) {
       int c = 0;
       return nums.Select(n => c += n).ToArray();
    }

// One Liner LINQ
/*
    public int[] RunningSum(int[] nums) => 
        nums
            .Select((num, i) => i is 0 
                    ? num 
                    : nums[i] += nums[i - 1])
            .ToArray();
*/
}
