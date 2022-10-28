var decodeMessage = function(key, message) {
    let b = [];
    for(let i = 0 ; i< key.length ; i++){
        if(!(b.includes(key[i]))){
            b.push(key[i])
        }
    }
    b = b.join("").replace(" ","")
    message = message.split("");
    let a = []
    for(let i = 0 ; i< message.length ; i++){
        if(message[i] != " "){
            a.push( (b.indexOf(message[i])+ 10).toString(36));
        }else{
            a.push(" ")
        }
    }
    return a.join("")
};
