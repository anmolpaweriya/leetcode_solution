var earliestFullBloom = function(plantTime, growTime) {
    
    let c = []
for(let i = 0; i< plantTime.length; i++){
    c.push([plantTime[i],growTime[i]])
}

    let d = 0
    let temp = 0
    
    c = c.sort((a,b)=>b[1]-a[1])
    
    for(let i =0; i< c.length;i++){
        temp += c[i][0]
        d = Math.max(d,temp + c[i][1])
        
    }
    return d
};
