# Difference Between Ones and Zero in Row and Column 

# Problem 
You are given a **0-indexed** `m x n` binary matrix `grid`.

A **0-indexed** `m x n` difference matrix `diff` is created with the following procedure:

- Let the number of ones in the ith row be onesRowi.
- Let the number of ones in the jth column be onesColj.
- Let the number of zeros in the ith row be zerosRowi.
- Let the number of zeros in the jth column be zerosColj.
- diff[i][j] = onesRowi + onesColj - zerosRowi - zerosColj

Return the difference matrix diff.

**Example 1**

Input : grid = [[0,1,1],[1,0,1],[0,0,1]] 

Output : [[0,0,4],[0,0,4],[-2,-2,2]]

Explanation:

- diff[0][0] = onesRow0 + onesCol0 - zerosRow0 - zerosCol0 = 2 + 1 - 1 - 2 = 0 

- diff[0][1] = onesRow0 + onesCol1 - zerosRow0 - zerosCol1 = 2 + 1 - 1 - 2 = 0 

- diff[0][2] = onesRow0 + onesCol2 - zerosRow0 - zerosCol2 = 2 + 3 - 1 - 0 = 4 

- diff[1][0] = onesRow1 + onesCol0 - zerosRow1 - zerosCol0 = 2 + 1 - 1 - 2 = 0 

- diff[1][1] = onesRow1 + onesCol1 - zerosRow1 - zerosCol1 = 2 + 1 - 1 - 2 = 0 

- diff[1][2] = onesRow1 + onesCol2 - zerosRow1 - zerosCol2 = 2 + 3 - 1 - 0 = 4 

- diff[2][0] = onesRow2 + onesCol0 - zerosRow2 - zerosCol0 = 1 + 1 - 2 - 2 = -2

- diff[2][1] = onesRow2 + onesCol1 - zerosRow2 - zerosCol1 = 1 + 1 - 2 - 2 = -2

- diff[2][2] = onesRow2 + onesCol2 - zerosRow2 - zerosCol2 = 1 + 3 - 2 - 0 = 2

**Example 2**

Input : grid = [[1,1,1],[1,1,1]]

Output : [[5,5,5],[5,5,5]]

Explanation:

- diff[0][0] = onesRow0 + onesCol0 - zerosRow0 - zerosCol0 = 3 + 2 - 0 - 0 = 5

- diff[0][1] = onesRow0 + onesCol1 - zerosRow0 - zerosCol1 = 3 + 2 - 0 - 0 = 5

- diff[0][2] = onesRow0 + onesCol2 - zerosRow0 - zerosCol2 = 3 + 2 - 0 - 0 = 5

- diff[1][0] = onesRow1 + onesCol0 - zerosRow1 - zerosCol0 = 3 + 2 - 0 - 0 = 5

- diff[1][1] = onesRow1 + onesCol1 - zerosRow1 - zerosCol1 = 3 + 2 - 0 - 0 = 5

- diff[1][2] = onesRow1 + onesCol2 - zerosRow1 - zerosCol2 = 3 + 2 - 0 - 0 = 5

## Solution 

```Java
    class Solution {
    public int[][] onesMinusZeros(int[][] grid) {
       int m=grid.length;
       int n=grid[0].length;
       int [] oneR=new int[m];
       int [] oneC=new int[n]; 

       for(int i=0; i<m; i++){
        for(int j=0; j<n; j++){
            oneR[i]+=grid[i][j];
            oneC[j]+=grid[i][j];
        }
    }
    for(int i=0; i<m; i++){
        for(int j=0; j<n; j++){
            grid[i][j]=2*oneR[i]+2*oneC[j]-n-m;
        }
    }
    return grid;
    }
}
```
## Explanation :

1. **Initialization**: The function `onesMinusZeros` takes a 2D array grid as input, which represents a matrix.

2. **Calculate the sum of ones in each row and each column:**
    - wo arrays `oneR` and `oneC` are initialized to store the sum of ones in each row and each column, respectively.

    - Two nested loops iterate through each element in the grid, and the sums are calculated for each row and   
        each column.

3. **Update the values in the grid:**
  
    - Another set of nested loops iterate through each element in the grid.
  
    - The values in the grid are updated based on the formula: 
        `2 * sum of ones in the row + 2 * sum of ones in the column - n - m.`
4. **Return the modified grid.**
    In summary, the function modifies the input grid by updating each element based on the sum of ones in its row and column, using the specified formula.





         