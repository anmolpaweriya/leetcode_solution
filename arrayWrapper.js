/**
 * @param {number[]} nums
 */
function ArrayWrapper (nums) {
    this.nums = nums;
};

ArrayWrapper.prototype.valueOf = function() {
    if(this.nums.length <1) return 0;
    return this.nums.reduce((total , val)=>total + val);
}

ArrayWrapper.prototype.toString = function() {
    return "[" + this.nums.join(",") + "]"
}

/**
 * const obj1 = new ArrayWrapper([1,2]);
 * const obj2 = new ArrayWrapper([3,4]);
 * obj1 + obj2; // 10
 * String(obj1); // "[1,2]"
 * String(obj2); // "[3,4]"
 */
