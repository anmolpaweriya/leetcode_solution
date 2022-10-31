var mergeNodes = function(head) {
    let a = [];
    let b = false;
    let temp = head
    let c = 0;
    while(head != null){
        if(b && head.val == 0){ a.push(c);c = 0}
        else if(head.val == 0){b = true; c = 0}
        
        if(b){c+= head.val}
        head = head.next
    }
    head = temp;
    for(let i = 0 ; i<a.length ; i++){
        temp.val = a[i]
        if(i == a.length -1){
            temp.next = null
        }
        temp = temp.next
        
    }

    
    return head;
};
