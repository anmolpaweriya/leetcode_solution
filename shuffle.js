var shuffle = function(nums, n) {
    let a =[]
    for(let i = 0; i<n;i++){
        a.push(nums[i])
        a.push(nums[i+n])
    }
    return a
};
