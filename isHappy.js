var isHappy = function(n) {
    let a = 0,b =0;
    
    while(b<7){
        a  = 0;b++;
        while(n>0){a+= (n%10)**2
        n = Math.floor(n/10)
        }
        n = a
        if(a == 1){return true}
    }
    return false
};
