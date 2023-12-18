# Game of XOR (Java)

## problem 
Given an array A of size N. The value of an array is denoted by the bit-wise XOR of all elements it contains.
 Find the bit-wise XOR of the values of all subarrays of A.

**Example 1 :**

Input : N=3 A={1,2,3}

Output :  3 

Explanation:

xor[1] = 1

xor[1, 2] = 3

xor[2] = 2

Result : 1 ^ 3 ^ 2 = 0

## Solution 
```java
    class Solution {
        static int gameOfXor(int N , int[] A) {
             int result = 0;
             for (int i = 0; i < N; i++) {
             int frequency = (i + 1) * (N - i); // +1*(3-3)= 4*0 =0  
                 if (frequency % 2 == 1) { //0%2==1
                    result ^= A[i];  
                  }
        }
        return result;
        }
    };
```
## Explanation :
1. `Result Initialization: int result = 0`; initializes the variable `result` to 0, which will store the final XOR result.

2. `Outer Loop: for (int i = 0; i < N; i++) { ... }` iterates through each element of the array `A`.

3. `Frequency Calculation: int frequency = (i + 1) * (N - i);` calculates the frequency of the current element in
 the XOR operation. The formula `(i + 1) * (N - i)` represents the number of subarrays in which the current element occurs. This is based on the observation that an element at index i occurs `(i + 1)` times in the prefix and `(N -i)` times in the suffix of the array.

4. `XOR Operation: if (frequency % 2 == 1) { result ^= A[i]; }` checks if the frequency is odd. If the frequency
 is odd, it means the element occurs an odd number of times in the XOR operation, so it's included in the final 
 result. The XOR operation is then performed with the current element. 

5. `Return Result: return result;` returns the final XOR result.


