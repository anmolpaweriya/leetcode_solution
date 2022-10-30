var displayTable = function(orders) {
      orders.sort((a,b)=>a-b)
    let a = [];
    let b = []
    for(let i = 0; i<orders.length ;i++){
        if(!b.includes(orders[i][2])){
            b.push(orders[i][2])
        }
    }
    b.sort();
    b.unshift("Table")
    a.push(b)
    for(let i = 0 ; i< orders.length ; i++){
        let c = true;
        for(let j = 1; j< a.length;j++ ){
            if(a[j][0] == orders[i][1]){
                let index = a[0].indexOf(orders[i][2])
                a[j][index] = `${Number(a[j][index]) + 1}`

                c = false
            }
        }
        if(c){
            let d = [orders[i][1]]
            while(d.length != a[0].length){
                d.push("0")
            }
            a.push(d)
            i --
        }
    }
    return a.sort((x,y)=>x[0]-y[0])
};
