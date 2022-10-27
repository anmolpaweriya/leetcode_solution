var deleteDuplicates = function(head) {
    let a =head
    while(a!= null){
        if(a.next != null && a.val == (a.next).val){a.next = (a.next).next}
        else{a = a.next}
    }
    return head
};
