var countPrefixes = function(words, s) {
  let a = 0;
    for(let i = 0 ; i< words.length ; i++){
        if(s.indexOf(words[i]) == 0){a++;}
    }
    return a
};
