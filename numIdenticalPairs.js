var numIdenticalPairs = function(nums) {
    let b =0
    for(let i =0;i< nums.length;i++){
        for(let j =i+1;j< nums.length;j++){
            if(nums[i] == nums[j]){b++}
        }
    }
    return b
};
