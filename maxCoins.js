var maxCoins = function(piles) {
    piles.sort((a,b)=>a-b)
    piles = piles.slice(piles.length/3 )
    let a = 0;
    for(let i = 0 ; i< piles.length; i+= 2){
        a+= piles[i]
    }
    return a;
};
