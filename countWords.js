var countWords = function(words1, words2) {
    let a = 0
    for(let i = 0; i< words1.length;i++){
        let index = words1.indexOf(words1[i])
        if(words1.indexOf(words1[i] , index +1) > 0){continue}
        if(words2.includes(words1[i])){
                index = words2.indexOf(words1[i])
                if(words2.indexOf(words1[i] , index+1) == -1){ a++}
        }
    }
    return a
};
