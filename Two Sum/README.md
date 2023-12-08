# Two Sum (javascript)
## Problem

Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

**Exmaple : 1**

Input: nums = [2,7,11,15], target = 9

Output: [0,1]

Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

**Exmaple : 2**

Input: nums = [3,2,4], target = 6

Output: [1,2]

**Example : 3**

Input: nums = [3,3], target = 6

Output: [0,1]

### Solution 
```javascript
    /**
    * @param {number[]} nums
    * @param {number} target
    * @return {number[]}
    */
    var twoSum = function(nums, target) {

        const numMap = {}; // Object to store numbers and their indices
        for (let i = 0; i < nums.length; i++) {
            const complement = target - nums[i];
             // Check if the complement exists in the numMap
            if(numMap[complement] !== undefined) {
                // If found, return the indices of the two numbers
                return [numMap[complement], i];
            }
            // Store the current number and its index in the numMap
            numMap[nums[i]] = i;
        }
    // If no such pair is found, return null or handle it as needed
    return null;
    };
```
## Explanation

1. **Initialization:** Create an empty object `numMap` to store numbers from the array and their corresponding
 indices.

2. **Iterate through the array:** Use a `for` loop to iterate through each element of the array `nums`.

3. **Calculate the complement:** For each element in the array, calculate the complement by subtracting it from
the target.

4. **Check if complement exists:** Check if the complement (the difference between the target and the current
array element) exists in the `numMap`.

5. **Store the current number and its index:** If the complement is not found, store the current number and its
 index in the `numMap` for future reference.

6. **No pair found:** If the loop completes without finding a pair, return `null` or handle it as needed.


## Time Complexity

This algorithm has a time complexity of O(n), where n is the length of the input array. The use of the numMap 
allows for constant-time lookups, making the overall solution efficient.