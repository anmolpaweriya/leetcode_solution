var repeatedCharacter = function(s) {
    let a = ''
    for(let i = 0; i< s.length;i++){
        if(a.includes(s[i])){return s[i]}
        else{a+= s[i]}
    }
};
