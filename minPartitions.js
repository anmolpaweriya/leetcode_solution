var minPartitions = function(n) {
    let m = 0;
    for(let i = 0; i< n.length;i++){
        if(Number(n[i]) > m){m = Number(n[i])}
    }
    return m
};
