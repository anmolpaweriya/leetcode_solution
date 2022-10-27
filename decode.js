var decode = function(encoded, first) {
    let a =[first];
    for(let i = 0; i< encoded.length;i++){
        let b = 0;
        while(true){
            if((a[i] ^ b) == encoded[i]){
                a.push(b);
                break;
            }
            else{b++}
        }
    }
    return a
};
