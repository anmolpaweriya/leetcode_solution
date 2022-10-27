var groupThePeople = function(groupSizes) {
    let b=[];
    for(let i = 0 ; i<groupSizes.length ; i++){
        let c = [],a = groupSizes[i]
        for(let j = 0; j< a; j++){
            let d = groupSizes.indexOf(a)
            c.push(d);
            groupSizes[d] = "a"
        }
        if(c.length >0){b.push(c)}
    }
    return b
};
