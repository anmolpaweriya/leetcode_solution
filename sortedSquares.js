var sortedSquares = function(nums) {
    return nums.map(a=>a**2).sort((a,b)=>a-b);
};
