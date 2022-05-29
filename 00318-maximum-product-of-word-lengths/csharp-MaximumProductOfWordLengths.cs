public class Solution
{
    public int MaxProduct(string[] words)
    {
        List<uint> masks = new List<uint>();
        int maxScore = 0;
		
		// The trick is here in this nested for loop
		// Iterate through all the words, and generate a bit mask where
		//                   zyxwvutsrqponmlkjihgfedcba
		// 		a = 0b000000000000000000000000000000001
		//		z = 0b000000010000000000000000000000000
		// Then you can just use a bitwise AND to check if words contain duplicate letters
        for (int i = 0; i < words.Length; i++)
        {
            uint mask = 0;
            foreach (char c in words[i])
				// `mask` = itself OR'd with 1, offset by the 'letter number'
                mask |= (uint)(1 << (c - 'a'));
            masks.Add(mask);
        }

        for (int i = 0; i < words.Length; i++)
        {
            for (int j = 0; j < words.Length; j++)
            {
                if (i == j) continue;
				// Here is where the words are being compared
				if ((masks[i] & masks[j]) != 0) continue;
                int thisScore = words[i].Length * words[j].Length;
                if (thisScore > maxScore) maxScore = thisScore;
            }
        }

        return maxScore;
    }
}