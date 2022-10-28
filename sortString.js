var sortString = function(s) {
    s = s.split("")
    let b = [] ;
    while(s.length >0){
    let a = '';
    for(let i = 0; i<s.length;i++){
        if(a.indexOf(s[i]) == -1){
            a+= s[i]
            s.splice(i,1);
            i--
        }
    }
    a = a.split("").sort();
        if(b.length%2 == 0){b.push(a.join(""))}
        else{b.push(a.reverse().join(""))}
    }
    return b.join("")
};
