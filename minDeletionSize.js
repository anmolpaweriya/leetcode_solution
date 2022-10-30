var minDeletionSize = function(strs) {
   let a = 0 ;
    for(let i = 0; i< strs[0].length ; i++){
        for(let j = 0 ; j< strs.length ; j++){
            
            if(j < strs.length -1 && strs[j+1][i] < strs[j][i]){
                a++;
                break;
            }
        }
    }
    return a;
};
