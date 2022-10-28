var countConsistentStrings = function(allowed, words) {
    let a = 0
    for(let i = 0;i<words.length ; i++){
        let b = 0
        for(let j = 0 ; j< words[i].length;j++){
            if(allowed.includes(words[i][j])){
                b++;
            }else {
                break;
            }
        }
        if(b == words[i].length){a++}
        
    }
    return a
};
