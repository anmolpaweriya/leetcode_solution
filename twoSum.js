var twoSum = function(nums, target) {
    for(let i in nums){
        for(let j = i; j< nums.length ; j++){
            if(nums[i]+nums[j] == target && i != j){      
                return [i,j]         
            }
        }
    }
};
