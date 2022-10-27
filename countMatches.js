var countMatches = function(items, ruleKey, ruleValue) {
    let a = 0,b;
    if(ruleKey == "type"){b = 0}
    else if(ruleKey == "color"){b = 1}
    else{b = 2}
    for(let i = 0 ; i<items.length; i++){
        if(items[i][b] == ruleValue){a++}
    }
    return a
};
