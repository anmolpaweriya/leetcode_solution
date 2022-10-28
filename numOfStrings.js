var numOfStrings = function(patterns, word) {
    let a = 0;
    for(let i = 0; i< patterns.length;i++){
        if(word.includes(patterns[i])){a++}
    }
    return a
};
