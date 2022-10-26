var removeNthFromEnd = function(head, n) {
  let temp = head, c = 0,d = 0;
    while (temp != null){
        c++;
        temp = temp.next;
    }
    temp = head;
    
    while(d < c-n-1 && temp != null){
        temp = temp.next;
        d++;
    }
    
    if(temp == head && c== n){head = head.next}
   else{ if(c >2){
    temp.next = (temp.next).next         
    }else if(c>1){
        temp.next = null
    }else{
        head = null
    }}
    
    return head
};
