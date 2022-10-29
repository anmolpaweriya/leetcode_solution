var minAddToMakeValid = function(s) {
    let a = 0;
    let b = 0;
    for(let i = 0 ; i< s.length ; i++){
        if(b == 0 && s[i] == ')'){a++; continue}
        
        if(s[i] == '('){b++}
        else if(s[i] == ')'){b--}
    }
    return a+b
};
