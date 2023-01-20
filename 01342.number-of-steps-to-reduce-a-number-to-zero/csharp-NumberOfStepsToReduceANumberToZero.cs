public class Solution {
    public int NumberOfSteps(int num) {
        if(num == 0) return 0;
        
        int count = 0;
        while(num > 0) {
            // add this step (1) and an additional step 
	    // if number is odd (num & 1)
            count += 1 + (num & 1);
            
            // divide by 2 and discard remainder least significant bit 
	    // (bit shift right accomplishes this due to being base 2)
            num >>= 1;            
        }
        
        return count - 1;
    }
}
