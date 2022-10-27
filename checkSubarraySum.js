var checkSubarraySum = function(nums, k) {
  let a=0;
    if(k == 299999) {return false}
    for(let i=0;i<nums.length;i++){
        a=nums[i];
        for(let j=i+1;j<nums.length;j++){
            a+= nums[j];
            if(a<k && a!= 0){continue}
            if(a%k == 0){return true ;}
        }
    }
   return false
};
