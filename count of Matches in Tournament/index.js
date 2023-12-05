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