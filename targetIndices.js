var targetIndices = function(nums, target) {
    nums.sort((a,b)=>a-b);
    let a = []
    for(let i = 0 ; i< nums.length ; i++)
        if(nums[i] == target){
            a.push(i)
        }
    return a
};
