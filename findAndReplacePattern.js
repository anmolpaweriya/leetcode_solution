var findAndReplacePattern = function(words, pattern) {
    let a = []
    for(let i = 0; i< words.length;i++){
        let b = words[i].split("")
        let c = 0;
        for(let j = 0 ; j< pattern.length ; j++){
            let d = 0;
            for(let k =j+1; k<pattern.length ; k++){
                if(pattern[j] == pattern[k]){
                    if(b[j] == b[k]){d++}
                    else{break;}
                }else{
                    if(b[j] != b[k]){d++}
                    else{break;}
                }
            }
            if(d == pattern.length -j -1){
                c++
            }
        }
        if(c == pattern.length){
            a.push(words[i])
        }
    }
    return a
};
