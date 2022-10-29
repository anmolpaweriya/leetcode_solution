var countNegatives = function(grid) {
    let a = 0;
    for(let i = 0; i<grid.length;i++){
        for(let j = 0 ; j< grid[i].length ; j++){
            if(grid[i][j] <0){
                a++
            }
        }
    }
    return a
};
