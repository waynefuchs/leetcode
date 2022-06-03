public class NumMatrix {

    private readonly int[][] _matrix;
    public NumMatrix(int[][] matrix) 
    {
        // Store the running sum of each row as the new matrix
        for(int row=0; row<matrix.Length; row++)
            for(int col=1; col<matrix[0].Length; col++)
                matrix[row][col] += matrix[row][col-1];
        _matrix = matrix;
    }

    public int SumRegion(int rowStart, int colStart, int rowEnd, int colEnd) {
        int sum = 0;
        for(int row=rowStart; row<=rowEnd; row++)
            sum += _matrix[row][colEnd] - (colStart>0 ? _matrix[row][colStart-1] : 0);
        return sum;
    }
}
