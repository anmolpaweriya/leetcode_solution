var getDecimalValue = function(head) {
    let num = 0;
    let temp = head;
    while(head!= null){
        num++;
        head = head.next;
    }
    let result = 0;
    for(let i = num-1; i>=0;i--){
        result += temp.val * 2**i;
        temp = temp.next
    }
    return result
};
