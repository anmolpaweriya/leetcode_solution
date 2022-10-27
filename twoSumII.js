var twoSum = function(numbers, target) {
    
    let temp;
    for(let i =0; i<numbers.length; i++){
        
        if(i == 0){temp = numbers[0]}
        else{
            
            if(temp == numbers[i] && 2*numbers[i] != target){continue} 
        }
        
        
        for(let j = i+1; j<numbers.length ;j++){
            
            
            if(numbers[i] + numbers[j] == target){return [i+1,j+1]}
            
        }
    }
};
