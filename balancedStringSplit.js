var balancedStringSplit = function(s) {
 let a = 0
 
    for(let i = 0; i<= s.length; i++){
       for(let j = i+1; j<= s.length;j++){
           let b = s.slice(i,j);
           
           if(b.length%2 == 0){
               let c = 0;
               for(let k = 0; k< b.length; k++){
                   if( b[k] == 'L'){ c++}
                   else{c--}
               }
               if(c == 0){ a++;
                         i = j}
           }
       }
    }
    return a
};
