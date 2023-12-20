# Buy Two Chocolates (Java script)
## Probelm 
You are given an integer array `prices` representing the prices of various chocolates in a store. You are also 
given a single integer `money`, which represents your initial amount of money.

You must buy **exactly** two chocolates in such a way that you still have some non-negative leftover money. You would like to minimize the sum of the prices of the two chocolates you buy.

Return the amount of money you will have leftover after buying the two chocolates. If there is no way for you to
buy two chocolates without ending up in debt, return `money`. Note that the leftover must be non-negative.

**Example 1 :**

Input: prices = [1,2,2], money = 3

Output: 0

Explanation: Purchase the chocolates priced at 1 and 2 units respectively. You will have 3 - 3 = 0 units of money afterwards. Thus, we return 0.

**Example 2 :**

Input: prices = [3,2,3], money = 3

Output: 3

Explanation: You cannot buy 2 chocolates without going in debt, so we return 3.

## Solution 
```javascript
    /**
 * @param {number[]} prices
 * @param {number} money
 * @return {number}
 */
var buyChoco = function(prices, money) {
        prices.sort((a,b)=>{return a-b});
        for(let i=0; i<prices.length; i++){
            for(let j=i+1; j<prices.length; j++){
            let sum=prices[i]+prices[j];
            if(sum<=money){
                return Math.abs(sum-money);
            }   
        }
        }
        return money;
    };
```

## Explanation 

1. `prices.sort((a, b) => {return a - b});`: The array of prices is sorted in ascending order. This is done to make it easier to find the pair of chocolates whose combined price is closest to the target amount.

2. The outer loop (`i`) iterates over each price in the array, and the inner loop (`j`) iterates over prices after
 the current price (`i`).

3. Inside the nested loops, the code calculates the sum of the current pair of prices: 

4. If the sum is within the budget, the function returns the absolute difference between the sum and the given 
  amount of money. This is the closest possible amount to the target. 

5. If no suitable pair is found within the budget, the function returns the original amount of money:  