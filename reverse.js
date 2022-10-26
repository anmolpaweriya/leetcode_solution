var reverse = function(x) {
  let a,b;
    
    
    if(x>=0){b = true}
    else{b = false}
    
    a = Math.abs(x)+'';
    a = a.split('').reverse().join("");
    a = Number(a)
    a =  b ? a : (-1*a)
    if(a<(-2)**31 || a>((2**31) -1)){return 0}
    else{return a}
    
};
