public class Solution {
    public int[][] Transpose(int[][] matrix) {
        int row = matrix.Length;
        int col = matrix[0].Length;
        
        // Initialize empty transpose matrix
        int[][] transpose = new int[col][];
        for(int x=0; x<col; x++) 
            transpose[x] = new int[row];
        
        // Do transpose
        for(int x=0; x<row; x++)
            for(int y=0; y<col; y++)
                transpose[y][x] = matrix[x][y];
        
        return transpose;
    }
}
