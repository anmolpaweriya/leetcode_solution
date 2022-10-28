var generateTheString = function(n) {
    let a = "a".repeat(n-1)
    if(n%2 == 0){a+= "p"}
    else{ a+= "a"}
    return a
};
