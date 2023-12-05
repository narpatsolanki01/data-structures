# Length of Last World 
## Problem
Given a string `s` consisting of words and spaces, return the length of the last word in the string.
A word is a maximal substring consisting of non-space characters only.

### Example 1:
**Input:** s = "Hello World"

**Output:** 5

**Explanation:** The last word is "World" with length 5.

### Example 2:
**Input:** s = "   fly me   to   the moon  "

**Output:** 4

**Explanation:** The last word is "moon" with length 4.

### Example 3:
**Input:** s = "luffy is still joyboy"

**Output:** 6

**Explanation:** The last word is "joyboy" with length 6.

## Solution 
```javascript
    /*
     * @param {string} s
     * @return {number}
     */
    var lengthOfLastWord = function(s) {
        let trimmedString=s.trim();
        let wordsArray =trimmedString.split(' ');
        let lastWorld=world1[worldArray.length-1];
        let lastworldlength=lastWorld.length;
        return lastworldlength;
    };
```

## Approach

1. `var lengthOfLastWord = function(s) { ... }:` This defines a function called lengthOfLastWord that takes a string
 s as an argument.

2. `let trimmedString = s.trim();`: This line trims the input string s using the `trim()` method. Trimming 
    removes leading and trailing whitespaces.

3. `let wordsArray = trimmedString.split(' ');`: The trimmed string is then split into an array of words using 
    the `split(' ')` method. This assumes that words in the input are separated by whitespace.

4. `let lastWord = wordsArray[wordsArray.length - 1];:` Retrieves the last element (last word) from the array
     of words.

5. `let lastWordLength = lastWord.length;:` Calculates the length of the last word by using the `length` property 
    of strings.

6. `return lastWordLength;:` The function returns the length of the last word.