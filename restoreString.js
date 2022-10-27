var restoreString = function(s, indices) {
    let a = s ;
    a = a.split("");
    for(let i = 0; i< indices.length;i++){
        a[indices[i]] = s[i]
    }
    return a.join("")
};
