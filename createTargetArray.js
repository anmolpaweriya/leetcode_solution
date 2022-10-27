var createTargetArray = function(nums, index) {
    let t = []
    for(let i = 0; i<nums.length;i++){
        t.splice(index[i],0,nums[i]);
    }
    return t
};
