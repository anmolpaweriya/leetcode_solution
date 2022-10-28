var halvesAreAlike = function(s) {
    let v = ['a','e','i','o','u'];
    let a = s.slice(0,s.length/2);
    let b = s.slice(s.length/2,s.length);
    let c = 0,d = 0;
    for(let i = 0 ; i< s.length/2 ;i++){
        if(v.includes(a[i].toLowerCase())){c++}
        if(v.includes(b[i].toLowerCase())){d++}
    }
    return c == d
};
