var smallerNumbersThanCurrent = function(nums) {
  let a = [];
    nums.forEach(e=>{
        a.push(e)
    }) 
    a.sort((b,c)=>b-c)
  
    let b = []
    nums.forEach(e=>{b.push(a.indexOf(e))})
    return b
};
