let userInput = prompt("Enter student marks");

userInput = Number(userInput);

function gradeMarks(marks){
    if(marks < 0 && marks > 100){
        alert("Invalid marks. Try again");
    } else {
        if(marks > 79 && marks <= 100){
            return "A";
        } else if(marks >= 60 && marks < 80){
            return "B";
        } else if(marks >= 50 && marks < 60){
            return "C";
        } else if(marks >= 40 && marks < 50){
            return "D";
        } else{
            return "E";
        } 
    }      
}

alert(`Your grade is ${gradeMarks(userInput)}`);
