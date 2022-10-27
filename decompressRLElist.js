var decompressRLElist = function(nums) {
    let a = '';
    for(let i = 0; i< nums.length; i+=2){
        for(let j = 0; j< nums[i]; j++){
            a+=  `${nums[i+1]}`
            if(j != nums[i]-1){a+= ","}
        }
            if(i != nums.length-2){a+= ","}
        
    }
    return a.split(",")
};
