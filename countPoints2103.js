var countPoints = function(rings) {
    let result = 0;
    for(let i = 0; i< 10;i++){
        let r = 0,g = 0, b = 0
        let start = 0
        while(rings.indexOf(i,start) != -1){
            let a = rings.indexOf(i,start)
            if(rings[a-1] == "R"){r++}
            else if(rings[a-1] == "G"){g++}
            else {b++}
            start = a+1;
        }
        if(r>0&& g>0&& b>0){result++}
    }
    return result
};
