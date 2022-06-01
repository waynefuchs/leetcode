public class Solution {
    public int[] RunningSum(int[] nums) {
        int[] runningSums = new int[nums.Length];
        int sum = 0;
        for(int i=0; i<nums.Length; i++) {
            sum += nums[i];
            runningSums[i] = sum;
        }
        return runningSums;
    }
}
