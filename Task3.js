// ============================================================
// TASK 1 — VARIABLES
// ============================================================

var name = "Naveen";
let age = 22;
const city = "Trichy";
let college = "ABC College";

console.log("Name:", name);
console.log("Age:", age);
console.log("City:", city);
console.log("College:", college);

// Change var
name = "Arun";
console.log("Changed var:", name);

// Change let
age = 25;
console.log("Changed let:", age);

// Try changing const
// city = "Chennai";
// This gives: TypeError: Assignment to constant variable.

// Redeclaring var
var name = "Kumar";
console.log("Redeclared var:", name);

// Redeclaring let
// let age = 30;
// This gives: SyntaxError: Identifier 'age' has already been declared.

// Redeclaring const
// const city = "Bangalore";
// This gives: SyntaxError: Identifier 'city' has already been declared.


// ============================================================
// TASK 2 — PRINTING STATEMENTS
// ============================================================

console.log("Hello JavaScript");

alert("Welcome to JavaScript!");

let confirmResult = confirm("Do you like JavaScript?");
console.log("Confirm result:", confirmResult);

let userName = prompt("Enter your name:");
console.log("Prompt name:", userName);

document.writeln("This message is displayed using document.writeln().");


// ============================================================
// TASK 3 — USER DETAILS
// ============================================================

let studentName = prompt("Enter your name:");
let studentAge = prompt("Enter your age:");
let studentCity = prompt("Enter your city:");
let qualification = prompt("Enter your qualification:");

console.log("Name:", studentName);
console.log("Age:", studentAge);
console.log("City:", studentCity);
console.log("Qualification:", qualification);


// ============================================================
// TASK 4 — FIND DATA TYPES
// ============================================================

let data1 = "JavaScript";
let data2 = 100;
let data3 = 99.5;
let data4 = true;
let data5 = false;
let data6 = undefined;
let data7 = null;

console.log(data1, typeof data1);
console.log(data2, typeof data2);
console.log(data3, typeof data3);
console.log(data4, typeof data4);
console.log(data5, typeof data5);
console.log(data6, typeof data6);
console.log(data7, typeof data7);


// ============================================================
// TASK 5 — STUDENT ARRAY
// ============================================================

let students = ["Arun", "Priya", "Kumar", "Divya", "Rahul"];

console.log("First student:", students[0]);
console.log("Second student:", students[1]);
console.log("Last student:", students[students.length - 1]);
console.log("Total students:", students.length);


// ============================================================
// TASK 6 — EMPLOYEE OBJECT
// ============================================================

let employee = {
    name: "Rahul",
    age: 28,
    role: "Software Developer",
    skills: ["JavaScript", "HTML", "CSS", "React"],
    isWorking: true,
    qualification: ["B.Tech", "M.Tech"]
};

console.log("Employee name:", employee.name);
console.log("Age:", employee.age);
console.log("Role:", employee.role);
console.log("First skill:", employee.skills[0]);
console.log("Last qualification:", employee.qualification[employee.qualification.length - 1]);
console.log("Working status:", employee.isWorking);


// ============================================================
// TASK 7 — CALCULATOR
// ============================================================

let a = 20;
let b = 5;

console.log("Addition:", a + b);
console.log("Subtraction:", a - b);
console.log("Multiplication:", a * b);
console.log("Division:", a / b);
console.log("Modulus:", a % b);
console.log("Exponentiation:", a ** b);


// ============================================================
// TASK 8 — SHOPPING BILL
// ============================================================

let shirt = 999;
let pant = 1499;
let shoes = 1999;
let bag = 799;

let totalPrice = shirt + pant + shoes + bag;

console.log("Total price:", totalPrice);


// ============================================================
// TASK 9 — INCREMENT & DECREMENT
// ============================================================

// A — Post Increment
let numA = 10;
let resultA = numA++;

console.log("A - a:", numA);
console.log("A - b:", resultA);

// B — Pre Increment
let numB = 10;
let resultB = ++numB;

console.log("B - a:", numB);
console.log("B - b:", resultB);

// C — Post Decrement
let numC = 10;
let resultC = numC--;

console.log("C - a:", numC);
console.log("C - b:", resultC);

// D — Pre Decrement
let numD = 10;
let resultD = --numD;

console.log("D - a:", numD);
console.log("D - b:", resultD);


// ============================================================
// TASK 10 — ASSIGNMENT OPERATORS
// ============================================================

let number = 10;

number += 5;
console.log("After += 5:", number);

number -= 3;
console.log("After -= 3:", number);

number *= 2;
console.log("After *= 2:", number);

number /= 4;
console.log("After /= 4:", number);

number %= 3;
console.log("After %= 3:", number);

number **= 2;
console.log("After **= 2:", number);


// ============================================================
// TASK 11 — COMPARISON OPERATORS
// ============================================================

console.log(10 > 5);
console.log(10 < 5);
console.log(10 >= 10);
console.log(10 <= 9);

console.log(5 == "5");
console.log(5 === "5");

console.log(10 != "10");
console.log(10 !== "10");


// ============================================================
// TASK 12 — LOGICAL AND
// ============================================================

console.log(true && true);
console.log(true && false);
console.log(false && true);
console.log(false && false);


// ============================================================
// TASK 13 — LOGICAL OR
// ============================================================

console.log(true || true);
console.log(true || false);
console.log(false || true);
console.log(false || false);


// ============================================================
// TASK 14 — LOGICAL NOT
// ============================================================

console.log(!true);
console.log(!false);
console.log(!(5 > 10));
console.log(!(10 > 5));


// ============================================================
// TASK 15 — COMBINATION OF COMPARISON + LOGICAL OPERATORS
// ============================================================

console.log(5 == "5" && !(5 === 5) || 6 > 7);

console.log(10 > 5 && 8 < 12 || 4 === "4");

console.log(7 === 7 && 10 != "10" || 5 >= 5);

console.log(15 < 10 || 20 > 15 && 5 == "5");


// ============================================================
// TASK 16 — VOTING USING TERNARY OPERATOR
// ============================================================

let votingAge = 20;

let votingResult = votingAge >= 18
    ? "Eligible to vote"
    : "Not eligible";

console.log(votingResult);


// ============================================================
// TASK 17 — PASSWORD USING TERNARY OPERATOR
// ============================================================

let password = true;

let loginResult = password
    ? "Login successful"
    : "Wrong password";

console.log(loginResult);


// ============================================================
// TASK 18 — CONCATENATION & TEMPLATE STRING
// ============================================================

let introName = "Naveen";
let introAge = 25;
let introCity = "Trichy";

// Using +
console.log(
    "My name is " + introName +
    ". I am " + introAge +
    " years old. I live in " + introCity + "."
);

// Using template literals
console.log(
    `My name is ${introName}. I am ${introAge} years old. I live in ${introCity}.`
);


// ============================================================
// TASK 19 — STRING CONVERSION
// ============================================================

let string1 = String(100);
let string2 = String(true);
let string3 = String(undefined);
let string4 = String(null);
let string5 = String([1, 2]);

console.log(string1, typeof string1);
console.log(string2, typeof string2);
console.log(string3, typeof string3);
console.log(string4, typeof string4);
console.log(string5, typeof string5);


// ============================================================
// TASK 20 — NUMBER CONVERSION
// ============================================================

console.log(Number());
console.log(Number(""));
console.log(Number("123"));
console.log(Number("a1"));
console.log(Number(true));
console.log(Number(false));
console.log(Number(undefined));
console.log(Number(null));


// ============================================================
// TASK 21 — BOOLEAN CONVERSION
// ============================================================

console.log(Boolean());
console.log(Boolean(""));
console.log(Boolean("hello"));
console.log(Boolean(123));
console.log(Boolean(true));
console.log(Boolean(false));
console.log(Boolean(undefined));
console.log(Boolean(null));
console.log(Boolean([]));
console.log(Boolean({}));


// ============================================================
// TASK 22 — VOTING ELIGIBILITY USING IF ELSE
// ============================================================

let voteAge = Number(prompt("Enter your age:"));

if (voteAge >= 18) {
    console.log("You can vote");
} else {
    console.log("You can't vote");
}


// ============================================================
// TASK 23 — POSITIVE, NEGATIVE OR ZERO
// ============================================================

let inputNumber = Number(prompt("Enter a number:"));

if (inputNumber > 0) {
    console.log("Positive");
} else if (inputNumber < 0) {
    console.log("Negative");
} else {
    console.log("Zero");
}


// ============================================================
// TASK 24 — GRADE SYSTEM
// ============================================================

let marks = Number(prompt("Enter your marks:"));

if (marks >= 90 && marks <= 100) {
    console.log("A Grade");
} else if (marks >= 80 && marks < 90) {
    console.log("B Grade");
} else if (marks >= 70 && marks < 80) {
    console.log("C Grade");
} else if (marks >= 60 && marks < 70) {
    console.log("D Grade");
} else if (marks >= 0 && marks < 60) {
    console.log("Fail");
} else {
    console.log("Invalid marks");
}


// ============================================================
// TASK 25 — JOB ELIGIBILITY USING NESTED IF
// ============================================================

let jobAge = Number(prompt("Enter your age:"));
let height = Number(prompt("Enter your height:"));
let weight = Number(prompt("Enter your weight:"));

if (jobAge >= 18) {
    if (height >= 160) {
        if (weight >= 60) {
            console.log("Congratulations! You are selected");
        } else {
            console.log("You are not selected because your weight is below 60.");
        }
    } else {
        console.log("You are not selected because your height is below 160.");
    }
} else {
    console.log("You are not selected because your age is below 18.");
}


// ============================================================
// TASK 26 — TRAFFIC LIGHT USING SWITCH
// ============================================================

let trafficLight = prompt("Enter traffic light color:");

switch (trafficLight.toLowerCase()) {
    case "red":
        console.log("Stop");
        break;

    case "yellow":
        console.log("Ready");
        break;

    case "green":
        console.log("Go");
        break;

    default:
        console.log("Invalid traffic light color");
}


// ============================================================
// TASK 27 — DAY USING SWITCH
// ============================================================

let day = 1;

switch (day) {
    case 1:
        console.log("Monday");
        break;

    case 2:
        console.log("Tuesday");
        break;

    case 3:
        console.log("Wednesday");
        break;

    case 4:
        console.log("Thursday");
        break;

    case 5:
        console.log("Friday");
        break;

    case 6:
        console.log("Saturday");
        break;

    case 7:
        console.log("Sunday");
        break;

    default:
        console.log("Invalid day");
}


// ============================================================
// TASK 28 — FINAL MINI PROJECT
// STUDENT RESULT SYSTEM
// ============================================================

// Step 1 — Get user details

let finalName = prompt("Enter your name:");
let finalAge = Number(prompt("Enter your age:"));
let finalCity = prompt("Enter your city:");

// Step 2 — Get marks

let tamil = Number(prompt("Enter Tamil marks:"));
let english = Number(prompt("Enter English marks:"));
let maths = Number(prompt("Enter Maths marks:"));

// Step 3 — Calculate total and average

let total = tamil + english + maths;
let average = total / 3;

// Step 4 — Check grade

let grade;

if (average >= 90) {
    grade = "A";
} else if (average >= 80) {
    grade = "B";
} else if (average >= 70) {
    grade = "C";
} else if (average >= 60) {
    grade = "D";
} else {
    grade = "Fail";
}

// Step 5 — Check voting eligibility

let voting;

if (finalAge >= 18) {
    voting = "Eligible";
} else {
    voting = "Not Eligible";
}

// Step 6 — Display result using template string

console.log(`
Name: ${finalName}
Age: ${finalAge}
City: ${finalCity}
Total: ${total}
Average: ${average.toFixed(2)}
Grade: ${grade}
Voting: ${voting}
`);