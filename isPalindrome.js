var isPalindrome = function(x) {
    let a = '',b=x
    if(x>=0){
        while(x>0){
            a+= `${x %10}`
            x = Math.floor(x/10)
        }
        if(a == b){return true}
        else{return false}
    }else{
        return false
    }
};
