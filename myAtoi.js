var myAtoi = function(s) {
   let  a = s.trim();
	a = a.split("");
let b = '';
	for(let i = 0; i< a.length;i++){
		if(a[i] == ' '){break}
		if(i == 0 ){if(a[i] == '-' || a[i] == "+"){b+=a[i] ; continue} }
		if(Number(a[i]) == 0 || Number(a[i])){b +=a[i]}
		else{break}
	}

	
    if(Number(b) < (-2)**31){return (-2)**31}
    else if(Number(b) > (2)**31 -1 ){return (2)**31 -1}
	else if (Number(b)) {return Number(b)}
	else {
		return 0
	}
};
