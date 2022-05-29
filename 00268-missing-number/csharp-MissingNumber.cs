public class Solution {
    public int MissingNumber(int[] nums) {
        int result = 0;

	// The trick on this one here is to simultaneously treat `i`
	// like it is the number that it "should be" and subtract away
	// the number that is instead in `nums` at this index.
	//
	// What you are left with, after iterating the entire 'nums'
	// array, will be the missing number.
	for(int i=0; i < nums.Length; i++) 
            result += (i + 1) - nums[i];
        
        return result;
    }
}
