var diStringMatch = function(s) {
    let a =[]
    let left = 0
    let right = s.length
    
    
    for(let i = 0 ; i <=s.length; i++){
        if(s[i] == "I"){
           a.push(left);
            left++
        }
        else{
           a.push(right);
            right --
            
        }
    }
    return a
};
