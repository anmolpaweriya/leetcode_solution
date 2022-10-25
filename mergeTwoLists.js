var mergeTwoLists = function(list1, list2) {
    let a = list1
    if(list1 != null){
    while(list1.next!=null){list1 = list1.next}
    list1.next = list2}
    else{
        a = list2
    }
    let b;
    list1 = list2 = a
    while(list1!=null){
        list2 = list1;
    while(list2!=null){
        if(list1.val > list2.val){
            b = list1.val
            list1.val = list2.val
            list2.val = b
        }
        list2 = list2.next
    }
        list1 = list1.next
    }
    return a
    
    
};
