var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function(n) {
        for(let i = 1 ; i<= n; ){

            if(isBadVersion(i)){
               for(let j = 0 ; j< 2000;j++){
                   if(!isBadVersion(i-j)){ return i-j+1 ; }
               }
            }
            
            if(i<n-2000){i+=1999}
            else{i++}
          
        }
        return false
      
    };
};
