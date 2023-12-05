# Count Of Matches in Tournament (Java Script)

## Problem
You are given an integer `n`, the number of teams in a tournament that has strange rules:

- If the current number of teams is even, each team gets paired with another team. A total of `n / 2` matches 
    are played, and `n / 2` teams advance to the next round.
- If the current number of teams is odd, one team randomly advances in the tournament, and the rest gets 
    paired. A total of `(n - 1) / 2` matches are played, and `(n - 1) / 2` + 1 teams advance to the next round. 

Return the number of matches played in the tournament until a winner is decided.

**Example 1**
Input: n = 7

Output: 6

Explanation: Details of the tournament: 

- 1st Round: Teams = 7, Matches = 3, and 4 teams advance.

- 2nd Round: Teams = 4, Matches = 2, and 2 teams advance.

- 3rd Round: Teams = 2, Matches = 1, and 1 team is declared the winner.

Total number of matches = 3 + 2 + 1 = 6.

**Example 2**
Input: n = 14

Output: 13

Explanation: Details of the tournament:

- 1st Round: Teams = 14, Matches = 7, and 7 teams advance.

- 2nd Round: Teams = 7, Matches = 3, and 4 teams advance.

- 3rd Round: Teams = 4, Matches = 2, and 2 teams advance.

- 4th Round: Teams = 2, Matches = 1, and 1 team is declared the winner.

Total number of matches = 7 + 3 + 2 + 1 = 13.


### Solution

**Java Script**
```Javascript
    var numberOfMatches = function(n) {
        let teams,advance;
        let arr=[],sum=0;
        while(n!=1){
           if(n%2==0){
                teams=n/2;
                arr.push(teams);
                advance=(n)/2;
                n=advance;
            }
            else{
                teams=(n-1)/2;
                arr.push(teams);
                advance=(n-1)/2+1;
                n=advance;
             }
        }
        for(let i=0; i<arr.length; i++){
            sum+=arr[i];
        }
        return sum;
    };
```
**Java**
```Java
    class Solution {
        public int numberOfMatches(int n) {
                 int teams,advance;
         int[] arr = new int[200];
         int sum=0,count=0;
        while(n!=1){
           if(n%2==0){
                teams=n/2;
                arr[count]=teams;
                advance=(n)/2;
                n=advance;
                count++;
            }
            else{
                teams=(n-1)/2;
                arr[count]=teams;
                advance=(n-1)/2+1;
                n=advance;
                count++;
             }
        }
        for(int i=0; i<arr.length; i++){
            sum+=arr[i];
        }
        return sum;
        }
    }
```
## Approach
1. `let teams, advance;`: These variables will be used to store the number of teams in each round and the number 
    of teams advancing to the next round, respectively.

2. `let arr = [], sum = 0;`: The array arr is used to store the number of teams in each round. The variable `sum` 
    will store the total number of matches.

3. The `while` loop continues until there is only one team left `(n !== 1)`.

4. Inside the loop:

- If the number of teams `(n)` is even `(n % 2 === 0)`, it means that every team can pair up, and half of 
    them advance to the next round. The number of teams in the next round is calculated, pushed to the 
    `arr` array, and `n` is updated to the number of advancing teams.

- If the number of teams is odd, one team gets a bye (doesn't play in the current round). The number of teams 
    in the next round is calculated, pushed to the `arr` array, and `n` is updated to the number of advancing teams plus the team that got a bye.
    
5. After the loop, another loop iterates over the `arr` array, summing up the number of teams in each round to 
    get the total number of matches.

6. The function returns the total number of matches (`sum`).

 This code essentially simulates a tournament where teams pair up in each round, and the process continues until there is only one team left. The total number of matches is then calculated based on the number of teams in each round.





