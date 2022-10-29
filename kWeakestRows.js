var kWeakestRows = function(mat, k) {
    for(let i = 0; i<mat.length ; i++){
        let a = 0;
        let b = []
        mat[i].forEach(e=>{
            if(e == 1){
                a++
            }
        })
        mat[i] = [a,i];        
    }
    
    mat.sort((a,b)=>a[0]-b[0])
    let a = []
    for(let i = 0 ; i< mat.length;i++){
        a.push(mat[i][1])
    }
    return a.slice(0,k)
    
};
