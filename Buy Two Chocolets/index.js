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