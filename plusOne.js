var plusOne = function(digits) {
    for (let i = digits.length-1;i>=0;i--) {
	digits[i]+= 1;
		
		if(Math.floor(digits[i]/10) >0){ 
			digits[i] -= 10
			if(i == 0){
				digits.unshift(1)
			}
		}
		else{break;}
	}
	return digits
};
