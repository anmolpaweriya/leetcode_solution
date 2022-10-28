var minOperations = function(boxes) {
    let a =[]
    for(let i = 0 ; i<boxes.length; i++){
            let b = 0;
            for(let j = 0; j<boxes.length; j++){
                if(boxes[j] == '1') {
                    b += Math.abs(j-i);
                }
            }
        a.push(b)
    }
    return a
};
