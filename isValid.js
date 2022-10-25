var isValid = function(s) {
    let a = 0,b = 0,c = 0;
    let d = s.slice('')
    let f=[];
    for(let i = 0 ; i< s.length ; i++){
        let e = d[i]
    if(e == '('){a++; f.push(e)}
    else if(e == ')'){if(a>0&& f.pop() == '('){a--}else{return false}}
    else if(e == '['){b++;f.push(e)}
    else if(e == ']'){if(b>0 && f.pop()=='['){b--}else{return false}}
     else if(e == '{'){c++ ; f.push(e)}
     else if(e == '}'){if(c>0 && f.pop() == '{' ){c--}else{return false}}
        
    }
    if(a == 0 && b == 0 && c == 0){
        return true
    }
    else {return false}
};
