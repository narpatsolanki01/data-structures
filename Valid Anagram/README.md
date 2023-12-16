# Valid Anagram (Java Script)
## Problem 
Given two strings `s` and `t`, return `true` if t is an anagram of `s`, and `false` otherwise.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

**Example 1:**

Input : s = "anagram", t = "nagaram"

Output : true

**Example 2:**

Input:  s = "rat", t = "car"

Output: false

## Solution 
```javascript
    /**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    // Check if the lengths of the two strings are different
    if (s.length != t.length) {
        return false;
    }

    // Create an object 'letter' to store the frequency of each character
    let letter = {};

    // Loop through each character in both strings
    for (let i = 0; i < s.length; i++) {
        // Update the frequency of the current character in string 's'
        if (letter[s[i]] !== undefined) {
            letter[s[i]]++;
        } else {
            letter[s[i]] = 1;
        }

        // Update the frequency of the current character in string 't'
        if (letter[t[i]] !== undefined) {
            letter[t[i]]--;
        } else {
            letter[t[i]] = -1;
        }
    }

    // Check if all characters have a frequency of 0, indicating an anagram
    for (const letters in letter) {
        if (letter[letters] !== 0) {
            return false;
        }
    }

    // If all characters have a frequency of 0, the strings are anagrams
    return true;
}
```
## Explanation :

1. The function first checks if the lengths of the two input strings (`s` and `t`) are different. If they are, the
 function immediately returns `false` because strings of different lengths cannot be anagrams.

2. It initializes an object called `letter` to store the frequency of each character in the strings. The keys of 
  this object represent characters, and the values represent their frequency. 

3. The function then iterates through each character in both strings (`s` and `t`). For each character in `s`, it 
    increments its frequency in the `letter` object. For each character in `t`, it decrements its frequency in the `letter` object.  

4. After processing all characters, the function checks if the frequencies of all characters in the `letter` 
  object are zero. If any character has a non-zero frequency, the function returns `false` because the strings are
  not anagrams.

5. If the frequencies of all characters are zero, the function returns `true`, indicating that the input strings 
 are anagrams. 



