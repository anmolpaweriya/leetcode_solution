var partitionLabels = function(s) {
    let a = []
    for(let i = 0 ; i< s.length;i++){
        let start = i;
        while(s.indexOf(s[i],start) != -1){
            start = s.indexOf(s[i],start)+1
        }
        
        for(let j = 0; j< s.slice(i,start).length; j++){
            if(s.indexOf(s.slice(i,start)[j],start) != -1){
                start = s.indexOf(s.slice(i,start)[j],start)+1
                j--
            }
        }
        
        a.push(start-i);
        i = start-1;
    }
    return a
};
