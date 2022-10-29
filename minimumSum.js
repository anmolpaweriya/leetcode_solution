var minimumSum = function(num) {
    let a = num;
    num = `${num}`
    for(let i = 0 ; i< num.length;i++){
        for(let j = 0; j< num.length; j++){
        let b = num.split("")
            if(i != j){
                let c = num[i] + num[j]
                if(i <j){
                    b.splice(i,1)
                    b.splice(j-1,1)
                }else{
                    b.splice(j,1)
                    b.splice(i-1,1)   
                }
                
                if(a>( Number(c)+ Number(b.join("")))){a =  Number(c)+ Number(b.join(""))}
                if(a>( Number(c)+ Number(b.reverse().join("")))){a =  Number(c)+ Number(b.join(""))}
    
            }
        }
    }
    return a
};
