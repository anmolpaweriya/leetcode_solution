var countAsterisks = function(s) {
    s = s.split("|")
    let a = 0;
    for(let i = 0;i< s.length;i+=2){
        a+= s[i].split("*").length -1
    }
    return a
};
