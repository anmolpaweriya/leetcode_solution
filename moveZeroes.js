var moveZeroes = function(nums) {
    let c = nums.length;
    for(let i= 0;i< nums.length;i++){
        if(nums[i] == 0){
            nums.splice(i,1);
            i--;
        }
    }
    while(c!= nums.length){
        nums.push(0)
    }
	return nums
};
