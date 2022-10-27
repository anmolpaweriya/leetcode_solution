var mostWordsFound = function(sentences) {
    let a = 0;
    sentences.forEach(e=>{
        e = e.split(" ")
        if(e.length >a){a = e.length }
    })
    return a
};
