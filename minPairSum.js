var minPairSum = function(nums) {
    nums.sort((a,b)=>a-b)
    let a = 0;
    for(let i = 0 ; i< nums.length/2;i++){
        let b = nums[i]+nums[nums.length-i-1]
        if(a< b){
            a = b
        }
    }
    return a
};
