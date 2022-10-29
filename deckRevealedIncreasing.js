var deckRevealedIncreasing = function(deck) {
    deck.sort((a,b)=>a-b)
    let a = []
        a.unshift(deck.pop())
    
    while(deck.length>0){
        a.unshift(a.pop())
        a.unshift(deck.pop())
    }
    
    return a
};
