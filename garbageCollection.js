var garbageCollection = function(garbage, travel) {
         let a = 0;
    let b = ['M','G','P']
    for(let j = 0 ; j< 3 ; j++){
        if(!(garbage.join("").includes(b[j])) ){continue}
    let d = 0;
        
    for(let i = 0; i<garbage.length; i++){
        
        if(garbage[i].includes(b[j])){
        a+= garbage[i].split(b[j]).length - 1;
                d = i
            
        }
    }
        if(d>0)
            a += (travel.slice(0,d)).reduce((t,c)=>t+c) ;
        
    }
return a
};
