var removeOuterParentheses = function(s) {
    let a = 0;
    s = s.split("");
    for(let i = 0;i<s.length;i++){
        if(s[i] == '('){a++}
        else{a--}
if(a == 0 || (a == 1 && s[i] == '(')){
    s.splice(i,1);
    i--;
}

    }
    return s.join("")
};
