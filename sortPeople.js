var sortPeople = function(names, heights) {
    let a = heights;
    a = a.join(",")
    heights.sort((c,b)=>b-c);
    a = a.split(",").map(b=>Number(b))
    let b = [];
    for(let i = 0; i<a.length;i++){
        b.push(names[a.indexOf(heights[i])])
    }
    
    return b
};
