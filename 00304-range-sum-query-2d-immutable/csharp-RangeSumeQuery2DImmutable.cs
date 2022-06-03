public class NumMatrix {

    private readonly int[][] _matrix;
    public NumMatrix(int[][] matrix) {
        _matrix = matrix;
    }
    
    public int SumRegion(int rowStart, int colStart, int rowEnd, int colEnd) {
        int sum = 0;
        for(int col=colStart; col<=colEnd; col++) 
            for(int row=rowStart; row<=rowEnd; row++)
                sum += _matrix[row][col];
        return sum;
    }
}
