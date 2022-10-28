var squareIsWhite = function(coordinates) {
    let a = parseInt(coordinates[0],36)-9
    return (a+Number(coordinates[1]))%2 != 0
};
