var freqAlphabets = function(s) {
    s = s.split("#");
    let a =''
    for(let i = 0; i< s.length;i++){
        if(i ==s.length -1 && s[i].length>0){
            for(let j =0; j<s[i].length; j++){
            a+= (Number(s[i][j])+9).toString(36);
            }
        }
        else if(s[i].length ==2 ){
            a+= (Number(s[i])+9).toString(36);
        }else{
            for(let j =0; j<s[i].length; j++){
                if(j == s[i].length -2){
            a+= (Number(s[i].slice(-2))+9).toString(36);
                    break
                }
                   else{
            a+= (Number(s[i][j])+9).toString(36);
                   
                   }
            }
        }
    }
    return a
};
