class Solution {
    //Function to count numbers from 1 to N that have 4 as a digit.
    countX(L,R,X)
    {
        let arr=[];
        let count=0;
        for(let i=L+1; i<R; i++){
            arr.push(i);
        }
        let arr1=arr.join('');
        for(let i=0; i<arr1.length; i++){
            if(arr1[i]==X){
                count++;
            }
        }
        return count;
    }
}

// Create an instance of the Solution class.
const solutionInstance = new Solution();

// Call the countX method with the desired values for L, R, and X.
const result = solutionInstance.countX(10, 50, 4);

// Print the result.
console.log(result);