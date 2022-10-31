var pairSum = function(head) {
    let length=0;
    let temp = head;
    while(temp!= null){
        length++;
        temp = temp.next;
    }
    let a = [];
    for(let i = 0; i<length/2;i++){
        a.push(head.val)
        head = head.next
    }
    for(let i = a.length-1 ; i>=0 ; i--){
        a[i] += head.val;
        head = head.next
    }
 
    return Math.max(...a)
};
