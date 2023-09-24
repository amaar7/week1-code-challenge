function checkSpeed(speed){
    let speedlimit = 70;
    let demeritPointsPer5KmAboveLimit = 1;
    let pointsPer5KmAboveLimit = Math.floor((speed - speedlimit) / 5);
    
    if (speed <= speedlimit) {
        return 'ok';
    }
    else if (pointsPer5KmAboveLimit <= 12) {
        return `points: ${pointsPer5KmAboveLimit}`;
    }
    else {
        return 'License suspended';
    }
}

let speed = 60;
let result = checkSpeed(speed);
console.log(result);


