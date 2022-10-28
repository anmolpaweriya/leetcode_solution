var checkIfPangram = function(sentence) {
    sentence = sentence.split("")
    for(let i = 10; i< 36;i++){
        if( sentence.indexOf((i).toString(36)) == -1){return false}
    }
    return true
};
