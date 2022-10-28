var numJewelsInStones = function(jewels, stones) {
    let a = 0;
    for(let i = 0 ; i< stones.length;i++){
        if(jewels.indexOf(stones[i]) != -1){
            a++
        }
    }
    return a
};
