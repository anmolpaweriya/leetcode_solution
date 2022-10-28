var uniqueMorseRepresentations = function(words) {
    const rule = {
   "a": ".-","b": "-...","c": "-.-.","d": "-..","e": ".","f": "..-.","g": "--.","h": "....","i": "..",
   "j": ".---","k": "-.-","l": ".-..","m": "--",
   "n": "-.","o": "---","p": ".--.","q": "--.-","r": ".-.","s": "...",
   "t": "-","u": "..-","v": "...-","w": ".--","x": "-..-","y": "-.--","z": "--.."
}
    let a = []
    for(let i = 0; i< words.length;i++){
        let b = ''
        for(let j = 0; j<words[i].length;j++){
            b+= rule[words[i][j]]
        }
        if(a.indexOf(b) == -1){a.push(b)}
    }
    return a.length
    
};
