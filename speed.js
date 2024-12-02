let currentSpeed = prompt("Enter your car's current speed:");

currentSpeed = Number(currentSpeed);

function speedCheck(speed){
    if ((speed <= 70) && (speed > 0)){
        return "Ok";
    } else if (speed > 70){
        const demeritPoints = Math.floor((speed - 70) / 5);
        if(demeritPoints < 12){
            return "Demerited points are: " +demeritPoints;
        } else {
            return "License suspended!";
        }
    } else{
        return "Invalid speed. Try again.";
    }

}

alert(speedCheck(currentSpeed));