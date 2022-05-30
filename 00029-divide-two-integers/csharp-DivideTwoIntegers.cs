public class Solution
{
    public int Divide(int dividend, int divisor)
    {
        // adjust for invalid test case
        if (dividend == int.MinValue && divisor == -1) return int.MaxValue;

        // divide by zero is UNDEF
        if (divisor == 0) throw new Exception();

        // Test if dividend>0 and divisor>0, then XOR those results:
        //      true: dividend>0 != divisor>0
        //      false: both are true or both are false
        bool isNegative = dividend > 0 ^ divisor > 0;

        // perform crude Math.Abs()
        uint x = (dividend < 0) ? (uint)((~(uint)dividend) + 1) : (uint)(dividend);
        uint y = (divisor < 0) ? (uint)((~(uint)divisor) + 1) : (uint)(divisor);
        int count = 0;

        // optimization for divide by 1 and -1
        if (y == 1 || y == -1) count = (int)x;
        // optimization for (n/n) = 1
        else if (x == y) count = 1;
        // optimization for when divisor > dividend
        else if (y > x) return 0;
        else
        {
            // bit shift division
            for (int bits = 31; bits >= 0 && x >= y; bits--)
            {
                if (x >> bits >= y)
                {
                    x -= y << bits;
                    count += 1 << bits;
                }
            }
        }

        // Adjust for negative
        return isNegative ? (~count) + 1 : count;
    }
}
