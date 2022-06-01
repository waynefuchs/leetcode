public class Solution {
    public int LengthOfLongestSubstring(string s) 
    {
        Queue<char> q = new Queue<char>();
        int maxLength = 0;
        
        for(int i=0; i<s.Length; i++)
        {
            char c = s[i];
            while(q.Contains(c)) q.Dequeue();
            q.Enqueue(c);
            maxLength = Math.Max(maxLength, q.Count);
        }
        
        return maxLength;
    }
}
