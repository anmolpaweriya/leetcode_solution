var executeInstructions = function(n, startPos, s) {
    let a = []
    for(let i = 0;i<s.length;i++){
        // for(let j = i+1;j<=s.length;j++){
            let b = s.slice(i);
            let x = startPos[0];
            let y = startPos[1]
            
            for(let k = 0; k< b.length;k++){
                if(b[k] == "L"){y--;}
                else if(b[k] == "R"){y++}
                else if(b[k] == "U"){x--;}
                else{x++;}
                
                if(x > n-1 || y> n-1 || y<0 || x<0){
                    a.push(k)
                    break;
                }
                if(k == b.length -1){
                    a.push(k+1)
                }
            }
        // }
    }
    return a
};
