var longestCommonPrefix = function(strs) {
    let a = strs[0],b=0,c = '';
    strs.forEach(e=>{
        if(e.length < a.length){a = e}
    })
    
   
    for(let j = 0; j<= a.length;j++){
        b = 0;
    strs.forEach(e=>{
        if(e.indexOf(a.slice(0,j)) == 0){
            b++;
        }
    })
        if(b == strs.length && (a.slice(0,j)).length >c.length){
            c = a.slice(0,j)
        }
    }
    
    return c
};
