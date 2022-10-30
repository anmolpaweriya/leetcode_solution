var shortestToChar = function(s, c) {
    let a = []
    for(let i = 0 ;i< s.length ; i++){
        if(s[i] == c){a.push(0) ; continue;}
        let left = i
        let right = i
        while(s[left] != c && s[right] != c){
            if(left != 0){ left--}
            if(right != s.length -1){ right++}
        }
        
        if(s[left] == c){a.push(i-left)}
        else if(s[right] == c){a.push(right - i)}
    }
    return a
};
