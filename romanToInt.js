const romanToInt = function(s) {
   const r = {"I":1,"V":5,'X':10,'L':50,'C':100,'D':500,'M':1000}
   let n = 0
   
 
    for(let i = 0 ; i< s.length ; i++){
     
        if(i < s.length -1){
         if(r[`${s[i]}`] >= r[`${s[i+1]}`]){
             n+= r[`${s[i]}`]
         }   
            else{
                n -= r[`${s[i]}`]
            }
        }else{
            n += r[`${s[i]}`]
        }
   }
    return n
};
