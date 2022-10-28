var minPartitions = function(n) {
     return n.split("").sort((a,b)=>b-a)[0]
};
