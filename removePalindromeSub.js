function checkPalindrom(s){
      let l = Math.round(s.length/2)
    let a = s.slice(0,l);
    let b = s.slice(-l)
    return a == b.split("").reverse().join("")
}
var removePalindromeSub = function(s) {
    
    if(s == ''){return 0}
    else if(checkPalindrom(s)){return 1}
    else {return 2}
};
