//Ask the user for their salary and benefits to calculate gross salary
let initialSalary = prompt("Enter your monthly basic salary: ");
let benefits = prompt("Enter total amount of your monthly benefits and stipends: ")

//Ensure the input is converted to a number to ensure even string inputs are processed by the program
initialSalary = Number(initialSalary);
benefits = Number(benefits);

//Calculate gross salary from the user's total earnings
grossSalary = initialSalary + benefits;

function payeDeductions(salary){ // Function to calculate the user's salary after PAYE deductions
    if (salary < 24000){
        payeTax = salary * (10/100);
        return salary - payeTax;
    } else if (salary <= 32333) {
        payeTax = salary * (25/100);
        return salary - payeTax;
    } else if (salary <= 500000) {
        payeTax = salary * (30/100);
        return salary - payeTax;
    } else if (salary <= 800000) {
        payeTax = salary * (32.5/100);
        return salary - payeTax;
    } else {
        payeTax = salary * (35/100);
        return salary - payeTax;
    }
}

function nssfDeductions(salary){ // Function to calculate the user's salary after NSSF deductions
    let tierLimit = 7000
    if (salary <= tierLimit){ // For tier 1, where salary is 7000 and below
        nssfTax = salary * (6/100);
        return salary - nssfTax;
    } else if (salary > tierLimit) { // For tier 2, where salary is above 7000. 6% of the amount above 7000 is added to the deductions.
        nssfTax = (tierLimit * (6/100)) + ((salary - tierLimit) * (6/100));
        return salary - nssfTax;
    } 
}

function nhifDeductions(salary){ // Function to calculate the user's salary after NHIF deductions
    if (salary <= 5999){
        nhifTax = 150;
        return salary - nhifTax;
    } else if (salary < 8000){
        nhifTax = 300;
        return salary - nhifTax;
    } else if (salary < 12000){
        nhifTax = 400;
        return salary - nhifTax;
    } else if (salary < 15000){
        nhifTax = 500;
        return salary - nhifTax;
    } else if (salary < 20000){
        nhifTax = 600;
        return salary - nhifTax;
    } else if (salary < 25000){
        nhifTax = 750;
        return salary - nhifTax;
    } else if (salary < 30000){
        nhifTax = 850;
        return salary - nhifTax;
    } else if (salary < 35000){
        nhifTax = 900;
        return salary - nhifTax;
    } else if (salary < 40000){
        nhifTax = 950;
        return salary - nhifTax;
    } else if (salary < 45000){
        nhifTax = 1000;
        return salary - nhifTax;
    } else if (salary < 50000){
        nhifTax = 1100;
        return salary - nhifTax;
    } else if (salary < 60000){
        nhifTax = 1200;
        return salary - nhifTax;
    } else if (salary < 70000){
        nhifTax = 1300;
        return salary - nhifTax;
    } else if (salary < 80000){
        nhifTax = 1400;
        return salary - nhifTax;
    } else if (salary < 90000){
        nhifTax = 1500;
        return salary - nhifTax;
    } else if (salary < 100000){
        nhifTax = 1600;
        return salary - nhifTax;
    } else{
        nhifTax = 1700;
        return salary - nhifTax;
    }

}

alert(`Your net monthly salary is ${payeDeductions(nssfDeductions(nhifDeductions(grossSalary)))}`); //Print pop-up message with the user's net salary after all deductions