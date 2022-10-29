var checkArithmeticSubarrays = function(nums, l, r) {
    let a = [];
    for(let i = 0; i<l.length;i++){
        let b = nums.slice(l[i],r[i]+1)
        let c = true;
        b.sort((a,b) =>a-b)
        for(let j = 0; j<b.length-1;j++){
            if(b[1] -b[0]  != b[j+1] -b[j]){
                c = false;
                break;
            }
        }
        a.push(c)
    }
    return a
};
