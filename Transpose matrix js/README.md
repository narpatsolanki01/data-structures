# Transpose Matrix (javascript)

## problem

The transpose of a matrix is the matrix flipped over its main diagonal, switching the matrix's row and column indices.

**Example 1:**

Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]

Output: [[1,4,7],[2,5,8],[3,6,9]]

**Example 1:**

Input: matrix = [[1,2,3],[4,5,6]]

Output: [[1,4],[2,5],[3,6]]

## Solution:

```javascript
    **
    * @param {number[][]} matrix
    * @return {number[][]}
    */
    var transpose = function(matrix){
        // Get the number of rows and columns in the original matrix
        const numRows = matrix.length;
        const numCols = matrix[0].length;
        // Create a new matrix with swapped rows and columns
        const resultMatrix = [];
        for (let i = 0; i < numCols; i++) {
          resultMatrix[i] = [];
          for (let j = 0; j < numRows; j++) {
            resultMatrix[i][j] = matrix[j][i];
          }
        }
        return resultMatrix;
    }
```
## Explanation :

1. ``const numRows = matrix.length;`` and `const numCols = matrix[0].length;`: These lines calculate the number of rows
 and columns in the original matrix. 

2. `const resultMatrix = [];`: This initializes an empty array to store the transposed matrix.

3. The nested loop:
    - `for (let i = 0; i < numCols; i++)`: This loop iterates over the columns of the original matrix.
    - `resultMatrix[i] = [];`: This initializes an empty array for each column in the transposed matrix.
    - `for (let j = 0; j < numRows; j++)`: This loop iterates over the rows of the original matrix.
    - `resultMatrix[i][j] = matrix[j][i];`: This line transposes the elements by swapping row and column indices.

4. `return resultMatrix;`: This returns the transposed matrix.    
