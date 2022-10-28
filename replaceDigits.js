var replaceDigits = function(s) {
    s = s.split("")
    for(let i = 0; i< s.length;i+=2){
        if(Number(s[i+1]) >=0)
        s[i+1] = (parseInt(s[i],36)+Number(s[i+1])).toString(36)
    }
    return s.join("")
};
