var kidsWithCandies = function(candies, extraCandies) {
    let result = [],b = 0;
    candies.forEach(e=>{
        if(e>b){b = e}
    })
    for(let i = 0; i<candies.length;i++){
        if(candies[i] + extraCandies >= b){result.push(true)}
        else{result.push(false)}
    }
    return result
};
