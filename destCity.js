var destCity = function(paths) {
    let b = []
    for(let i = 0; i< paths.length;i++){
        b.push(paths[i].join(","))
    }
    let a = b.join(",").split(",")
    for(let i = 1 ; i< a.length;i+=2){
        let c = a[i];
        a[i] = "69";
        if(a.indexOf(c) == -1){return c}
    }
};
