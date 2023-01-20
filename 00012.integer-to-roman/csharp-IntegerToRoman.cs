public class Solution {
    private static readonly int[] romanValues 
        = {1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1};
    
    private static readonly string[] romanLetters 
        = {"M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"};
    
    public string IntToRoman(int num) {
        StringBuilder sb = new StringBuilder();
        for(int i=0; num>0; i++)
        {
            while(num >= romanValues[i]) {
                sb.Append(romanLetters[i]);
                num -= romanValues[i];                
            }
        }
        return sb.ToString();
    }
}
