var minMovesToSeat = function(seats, students) {
    seats.sort((a,b)=>a-b)
    students.sort((a,b)=>a-b)
    let a = 0;
    for(let i =0; i< seats.length;i++){
        a += Math.abs(seats[i] - students[i])
    }
    return a
};
