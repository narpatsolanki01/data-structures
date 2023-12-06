# How Many X' Search?  (Java Script)
### Problem

Given two integers L, R, and digit X. Find the number of occurrences of X in all the numbers in the range (L, R)
 excluding L and R.

 **Example : 1**

Input:

L=10, R=19, X=1

Output:

9

Explanation:

There are 9 1s (11, 12, 13, 14, 15, 16, 17, 18) in the numbers in the range (10,19).

**Example : 2**

Input:

L=18, R=81, X=9

Output:

7
Explanation:

There are 7 occurrences of the digit 9 in the numbers in the range (18,81).

### Solution
```javascript
    //User function Template for javascript
/**
 * @param {number} L
 * @param {number} R
 * @param {number} X
 * @returns {number}
*/

class Solution {
    // Function to count numbers from 1 to N that have X as a digit.
        countX(L, R, X) {
            // Initialize an empty array to store the numbers between L and R.
            let arr = [];

            // Iterate through the numbers from L+1 to R-1 and push them into the array.
            for (let i = L + 1; i < R; i++) {
                arr.push(i);
            }

            // Join the array elements into a single string to facilitate digit comparison.
            let arr1 = arr.join('');

            // Initialize a count variable to count the occurrences of the digit X.
            let count = 0;

            // Iterate through each digit in the string representation of numbers.
            for (let i = 0; i < arr1.length; i++) {
                // Check if the current digit is equal to the specified digit X.
                if (arr1[i] == X) {
                    // If yes, increment the count.
                    count++;
                }
        }

        // Return the count of numbers between L and R that have X as a digit.
        return count;
    }
}
```

## Explanation
**1. Method Signature:**

```javascript
    Copy code
    countX(L, R, X) {
        for (let i = L + 1; i < R; i++) {
            arr.push(i);
        }
    }

```      
 - The method is named `countX` and takes three parameters: `L` (lower limit), `R` (upper limit), and` X `(the digit to count).

 - An empty array `arr` is initialized. Then, a `for loop` is used to iterate over numbers from `L + 1` to `R - 1 `(exclusive) and push each number into the array.
 
 **2. String Conversion:**
 
 ```javascript
    let arr1 = arr.join('');
 ```
 - The array elements are joined into a single string (`arr1`). This is done to convert the array of numbers into a string, making it easier to check each digit individually.

**3. Digit Counting:**

```javascript
    let count = 0;
    for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] == X) {
        count++;
    }
}
```
- The code iterates through each digit in the string `arr1` using a `for` loop. For each digit, it checks if it 
    is  equal to the specified digit `X`. If there's a match, the `count` variable is incremented.

In summary, the `countX` method calculates the count of occurrences of a specific `digit (X)` in the numbers within the range from `L` to `R` (exclusive). It does this by creating an array of numbers, converting them to a string for digit-wise comparison, and then counting how many times the specified digit appears. 