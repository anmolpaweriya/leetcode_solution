var reversePrefix = function(word, ch) {
    let a = word.slice(0,word.indexOf(ch)+1).split("").reverse().join("")
    let b = word.slice(word.indexOf(ch)+1)
    return a+b
};
