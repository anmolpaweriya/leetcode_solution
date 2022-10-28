var numberOfBeams = function(bank) {
    let a = 0;
    let c = '0';
    for(let i = 0;i< bank.length; i++){
        if(i == 0 && bank[i].includes("1")){c =bank[i]}
        else if(bank[i].includes("1")){
            a += (bank[i].split("1").length -1)*(c.split("1").length -1);
            c = bank[i]
        }
    }
    return a
};
