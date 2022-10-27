var maximumWealth = function(accounts) {
    let a = 0, b = 0;
    accounts.forEach(c=>{
        b = 0;
        c.forEach(e=>{
            b += e
        })
        if(b >a){a = b}
    })
    return a
};
