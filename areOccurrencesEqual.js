var areOccurrencesEqual = function(s) {
    let a = s.split(s[0])
    let b = a.length;
        a = a.join("")
    
    while(a.length >0){
        a = a.split(a[0])
        if(a.length != b){return false}
        a = a.join("")
        
    }
    return true
};
