var prefixCount = function(words, pref) {
    let a =0;
    let b = false;
    words.sort()
    for(let i = 0; i<words.length;i++){
        if(words[i].indexOf(pref) == 0){a++;b = true;continue;}
        if(b){break}
    }
    return a
};
