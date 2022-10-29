var mergeSimilarItems = function(items1, items2) {
    let a = items1.concat(items2);
    a.sort((b,c)=>b[0]-c[0])
    for(let i = 0;i< a.length;i++){
        if( i < a.length -1 &&a[i][0] == a[i+1][0]){
            a[i][1] += a[i+1][1];
            a.splice(i+1,1)
            i--
        }
    }
    return a
};
