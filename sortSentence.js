var sortSentence = function(s) {
    s = s.split(" ");
    let a = []
    for(let i = 0; i< s.length; i++){
        for(let j = 0 ; j< s.length; j++){
            if(s[j].includes(i+1)){
                a.push(s[j].slice(0,-1))
            }
        }
    }
    return a.join(" ")
};
