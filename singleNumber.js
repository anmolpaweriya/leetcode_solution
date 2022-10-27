var singleNumber = function(nums) {
    nums.sort((a,b)=>a-b)

    for(let i = 1; i< nums.length; i++){
        if(i == nums.length-1 ){ if(nums[i] == nums[i-1] ) { break;} else{return nums[i]}}
        if(nums.indexOf(nums[i],i+1) == -1 && nums[i] != nums[i-1]){return  nums[i] }
    }
return nums[0]
};
