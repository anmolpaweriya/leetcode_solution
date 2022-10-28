var firstPalindrome = function(words) {
    for(let i = 0; i< words.length ; i++){
        let a = 0;
        for(let j = 0 ; j<Math.floor(words[i].length /2) ; j++){
            if(words[i][j] != words[i][words[i].length -j-1]){break;}
            else{a++}
        }
        if(a == Math.floor(words[i].length/2)){
            return words[i]
        }
    }
    return ""
};
