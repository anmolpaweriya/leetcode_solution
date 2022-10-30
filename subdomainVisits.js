var subdomainVisits = function(cpdomains) {
    let a = []
    for (let i = 0 ; i<cpdomains.length;i++){
        let b = cpdomains[i].split(" ")
        let c = b[1].split(".")
        for(let j = c.length - 1 ; j>=0; j--){
            let d = c.slice(j).join(".")
            let e = true;
            for(let k = 0 ; k< a.length;k++){
                if(a[k].includes(d)){
                    a[k][0] = `${Number(b[0]) + Number(a[k][0])}`
                    e = false;
                    break;
                }
            }
            if(e){a.push([b[0],d])}
        }
    }
    
    return a.map(f=>f.join(" "))
};
