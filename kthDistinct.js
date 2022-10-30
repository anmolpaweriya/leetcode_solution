var kthDistinct = function(arr, k) {
    for(let i = 0; i< arr.length ; i++){
        let b = true
        for(let j = 0; j< arr.length;j++){
            if(i != j && arr[i] == arr[j]){b = false ; break;}
        }
        if(b){k--;}
        if(k == 0){return arr[i]}
    }
    return  ""
};
