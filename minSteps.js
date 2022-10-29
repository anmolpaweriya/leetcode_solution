var minSteps = function(s, t) {
    
    let a = 0
    for(let i = 0 ; i< s.length;){
        let b = s.split(s[i])
        let c = t.split(s[i])
        if(b.length <= c.length){
            s = b.join("")
        }else{
            a += b.length  - c.length
            s = b.join("")
        }
    }
    return a
};
