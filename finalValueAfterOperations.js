var finalValueAfterOperations = function(operations) {
    let x = 0;
    operations.forEach(e=>{
        if( e == "++X" || e == "X++"){++x}
        else{--x}
    })
    return x
};
