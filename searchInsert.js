var searchInsert = function(nums, target) {
    for(let i = target ;i<=nums[nums.length -1];i++){
        if(nums.indexOf(i) >=0){return nums.indexOf(i) }
    }
    return nums.length
};
