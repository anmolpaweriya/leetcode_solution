var intersection = function(nums1, nums2) {
    let a ,b;
    if(nums1.length > nums2.length){
        a = nums1
        b = nums2
    }else{
        a = nums2;
        b = nums1
    }
    let c = []
    for(let i = 0 ; i< a.length;i++){
        if(b.includes(a[i]) && c.indexOf(a[i]) == -1){
            c.push(a[i])
        }
    }
    return c
};
