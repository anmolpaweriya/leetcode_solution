var middleNode = function(head) {
    let l = 0;
    let r = head;
    while(r != null){
        r = r.next;
        l++
    }
    if(l%2 == 0){l  = l/2}
    else{l = Math.floor(l/2) }
    
    for(let i = 0 ; i< l ; i++){
        head = head.next;
    }
    return head
};
