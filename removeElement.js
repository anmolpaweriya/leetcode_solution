var removeElement = function(nums, val) {
    nums = nums.sort((a,b)=>a-b)
    
    for(let i =nums.indexOf(val);i<nums.length;i++){
	   if(nums[i] == val){
		   nums.splice(i,1);
           i--; continue
	   }
        if(nums[i]>val){break}
   }
    return nums.length
};
