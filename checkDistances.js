var checkDistances = function(s, distance) {
    for(let i = 0 ;i< distance.length ; i++){
        let character = (i + 10).toString(36)
        
        if(s.indexOf(character) == -1){continue}
        
        let a = s.indexOf(character,0)
        let b = s.indexOf(character,a+1)
        if(Math.abs(a-b) -1 != distance[i]){return false}
    }
        return true
};
