# Subarray with 0 sum (Javascript)

## Problem 

Given an array of integers. Find if there is a **subarray** (of size at-least one) with **0 sum**. You just need to return true/false depending upon whether there is a subarray present with 0-sum or not. Printing will be taken care by the driver code.

**Example 1 :**
Input:

n = 5

arr = {4,2,-3,1,6}

Output: Yes

Explanation: 

2, -3, 1 is the subarray with sum 0.

**Example 2:**
Input :

n = 5

arr = {4,2,0,1,6}

Output : YES

Explanation: 

0 is one of the element in the array so there exist a subarray with sum 0.

## Solution 

```javascript
    //User function Template for javascript

/**
 * @param {number[]} arr
 * @param {number} n
 * @returns {boolean}
*/
class Solution {
    //Function to check whether there is a subarray present with 0-sum or not.
    
    subArrayExists(arr, n){
         let n = arr.length;
  for (let i = 0; i < n; i++) {
    let sum = 0;
    for (let j = i; j < n; j++) {
      sum += arr[j];
      // If the current sum is 0, a zero-sum subarray exists
      if (sum === 0) {
        return true;
      }
    }
  }
  // No zero-sum subarray found
  return false;
}
}
```
## Explanation

1. This line calculates the length of the array`arr`and stores it in the variable `n`.

2. The outer loop `i` iterates over each element of the array `arr`. For each starting index `i`, a sum variable
 `sum` is initialized to 0.

3. The inner loop `j` starts from the current outer loop index `i` and iterates until the end of the array. It
 calculates the cumulative sum of elements from index `i` to `j`. 

4. If at any point the cumulative sum becomes zero, it means there is a subarray whose sum is zero. In such a
 case, the function immediately returns `true`.

5. If the function doesn't find any subarray with a sum of zero during the entire iteration, it returns `false` at
 the end. 