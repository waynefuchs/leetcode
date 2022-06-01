public class Solution {
    public bool HasAllCodes(string s, int k) {
        HashSet<string> u = new HashSet<string>();
        for(int i=0; i<=s.Length - k;i++)
        {
            u.Add(s.Substring(i, k));
        }
        return u.Count == (int)Math.Pow(2, k);
    }
}
