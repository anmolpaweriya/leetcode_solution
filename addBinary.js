var addBinary = function(a, b) {
    let carry = 0,c,d;
    if(a.length > b.length){
        c = a;
        d = b;
    }else{
        c = b;
        d = a;
    }
    // let e = d.length;
    
    for(let i =c.length -d.length -1; i>=0 ; i--){
    d = "0"+d
    }
	

	c = c.split("")
    d = d.split("")
	
    for(let i =c.length -1 ; i>=0 ; i--){

             if(carry == 0 && c[i] == "0" && d[i] == "0"){c[i] = "0"}
        else if(carry == 0 && c[i] == "0" && d[i] == "1"){c[i] = "1"}
        else if(carry == 0 && c[i] == "1" && d[i] == "0"){c[i] = "1"}
        else if(carry == 0 && c[i] == "1" && d[i] == "1"){c[i] = "0" ; carry = 1;}
        
        else if(carry == 1 && c[i] == "0" && d[i] == "0"){c[i] = "1" ; carry = 0}
        else if(carry == 1 && c[i] == "0" && d[i] == "1"){c[i] = "0" ; carry = 1;}
        else if(carry == 1 && c[i] == "1" && d[i] == "0"){c[i] = "0" ; carry = 1;}
        else if(carry == 1 && c[i] == "1" && d[i] == "1"){c[i] = "1" ; carry = 1;}

		if(i == 0 && carry == 1){ c.unshift("1")}
       // else if((c.length -1-i)>e && carry == 0){break}
		
        
    }
    return c.join("")
};
