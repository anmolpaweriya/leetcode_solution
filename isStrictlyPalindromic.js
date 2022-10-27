var isStrictlyPalindromic = function(n) {
    let c =n;
    for(let j = 2;j<= c-2;j++){
        
        let a = ''
        while(n >=1){
        
        a = `${(n%j)}`+a;
        n = Math.floor(n/j)
    }
    
    for(let i = 0;i< a.length/2;i++){
        if(a[i] != a[-i]){return false}
    }}
    return true
};
