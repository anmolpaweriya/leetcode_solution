function llsize(l1){
    let a = l1,b=0;
    while(l1.next != null){
        b++;
        l1 = l1.next
    }
    return b
}

const addTwoNumbers = function(l1, l2) {
    let a ,b
    if(llsize(l1) > llsize(l2)){
        a = l1
        b = l2
    }
    else {
        a = l2
        b = l1
    }
    let c = a
    while(a != null ){
        
        if(a.val+b.val >=10){
            a.val  -=10
            
            if(a.next != null){
           (a.next).val += 1
                
            }else{
                a.next = new ListNode(1,null)
            }
        }
        a.val += b.val
        a = a.next
        if(b.next!= null){
        b = b.next
        
        }else{
            b.val = 0
        }
    }
    
    return c
};
