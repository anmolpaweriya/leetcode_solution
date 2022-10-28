var cellsInRange = function(s) {
    let b = [];
    for(let i = parseInt(s[0],36);i<=parseInt(s[3],36); i++){
        for(let j = Number(s[1]) ; j<= Number(s[4]);j++){
            b.push(`${(i).toString(36).toUpperCase()}${j}`)
        }
    }
    return b
};
