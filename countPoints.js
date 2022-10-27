var countPoints = function(points, queries) {
    let a = [];
    for(let i = 0; i< queries.length; i++){
        let b = 0
        for(let j = 0 ; j<points.length ; j++){
            if(Math.sqrt( (points[j][0] - queries[i][0])**2 + (points[j][1] - queries[i][1])**2 ) <= queries[i][2]){b++}
        }
        a.push(b)
    }
    return a
};
