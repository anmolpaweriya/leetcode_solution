var groupAnagrams = function(strs) {
    let a = []
    while(strs.length>0){
        let b = [strs.shift()]
        
    for(let i = 0; i< strs.length;i++){
        if(b[0].length == strs[i].length){
            let d = strs[i]
            d = d.split("");
            for(let j = 0; j< b[0].length;j++){
                if(d.indexOf(b[0][j]) != -1 ){
                 
                    d.splice(d.indexOf(b[0][j]) ,1)
                }else{break}
                
            }
            if(d.length == 0){
                b.push(strs[i]);
                strs.splice(i,1);
                i--;
            }
        }
    }
        a.push(b)
    }
    return a
};
