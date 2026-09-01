// ==========================================
// TASK 1 - var, let, const
// ==========================================

var studentName = "Naveen";
let studentAge = 22;
const collegeName = "ABC College";

console.log("Student Name:", studentName);
console.log("Student Age:", studentAge);
console.log("College Name:", collegeName);

// Changing var value
studentName = "Kumar";
console.log("Changed Student Name:", studentName);

// Changing let value
studentAge = 23;
console.log("Changed Student Age:", studentAge);

// Trying to change const
// collegeName = "XYZ College";
// Uncomment the above line to see the error:
// TypeError: Assignment to constant variable.

// Redeclaring var
var studentName = "Arun";
console.log("Redeclared var Student Name:", studentName);

// Trying to redeclare let
// let studentAge = 25;
// Uncomment the above line to see the error:
// SyntaxError: Identifier 'studentAge' has already been declared.


// ==========================================
// TASK 2 - User Information
// ==========================================

let name = prompt("Enter your name:");
let age = prompt("Enter your age:");
let city = prompt("Enter your city:");

console.log("Name:", name);
console.log("Age:", age);
console.log("City:", city);


// ==========================================
// TASK 3 - Welcome Message
// ==========================================

let userName = prompt("Enter your name:");

alert("Welcome " + userName + "!");


// ==========================================
// TASK 4 - Age Calculator
// ==========================================

let birthYear = prompt("Enter your birth year:");

let currentYear = 2026;
let calculatedAge = currentYear - birthYear;

console.log("Birth Year:", birthYear);
console.log("Age:", calculatedAge);


// ==========================================
// TASK 5 - Identify Data Types
// ==========================================

let value1 = "Hello";
let value2 = 100;
let value3 = 25.5;
let value4 = true;
let value5 = false;
let value6;
let value7 = null;

console.log("Value:", value1, "Type:", typeof value1);
console.log("Value:", value2, "Type:", typeof value2);
console.log("Value:", value3, "Type:", typeof value3);
console.log("Value:", value4, "Type:", typeof value4);
console.log("Value:", value5, "Type:", typeof value5);
console.log("Value:", value6, "Type:", typeof value6);
console.log("Value:", value7, "Type:", typeof value7);


// ==========================================
// TASK 6 - Student Data
// ==========================================

let student = {
    name: "Naveen",
    age: 22,
    city: "Trichy",
    qualification: "B.Tech",
    isStudent: true
};

console.log("Complete Object:", student);
console.log("Name:", student.name);
console.log("Age:", student.age);
console.log("Qualification:", student.qualification);
console.log("Is Student:", student.isStudent);


// ==========================================
// TASK 7 - Fruit Array
// ==========================================

let fruits = [
    "Apple",
    "Mango",
    "Orange",
    "Banana",
    "Grapes",
    "Papaya"
];

console.log("First Fruit:", fruits[0]);
console.log("Second Fruit:", fruits[1]);
console.log("Last Fruit:", fruits[fruits.length - 1]);
console.log("Total Number of Fruits:", fruits.length);


// ==========================================
// TASK 8 - Basic Calculator
// ==========================================

let a = 20;
let b = 5;

console.log("Addition:", a + b);
console.log("Subtraction:", a - b);
console.log("Multiplication:", a * b);
console.log("Division:", a / b);
console.log("Modulus:", a % b);
console.log("Exponentiation:", a ** b);


// ==========================================
// TASK 9 - Shopping Bill
// ==========================================

let shirt = 999;
let pant = 1499;
let shoes = 1999;

let totalPrice = shirt + pant + shoes;

console.log("Shirt:", shirt);
console.log("Pant:", pant);
console.log("Shoes:", shoes);
console.log("Total:", totalPrice);


// ==========================================
// TASK 10 - Simple Marks Calculation
// ==========================================

let tamil = 80;
let english = 75;
let maths = 90;

let totalMarks = tamil + english + maths;
let averageMarks = totalMarks / 3;

console.log("Tamil:", tamil);
console.log("English:", english);
console.log("Maths:", maths);
console.log("Total Marks:", totalMarks);
console.log("Average Marks:", averageMarks);


// ==========================================
// TASK 11 - Post Increment
// ==========================================

let postIncrementA = 10;

let postIncrementB = postIncrementA++;

console.log("a:", postIncrementA);
console.log("b:", postIncrementB);

// Expected Output:
// a: 11
// b: 10


// ==========================================
// TASK 12 - Pre Increment
// ==========================================

let preIncrementA = 10;

let preIncrementB = ++preIncrementA;

console.log("a:", preIncrementA);
console.log("b:", preIncrementB);

// Expected Output:
// a: 11
// b: 11


// ==========================================
// TASK 13 - Post Decrement
// ==========================================

let postDecrementA = 20;

let postDecrementB = postDecrementA--;

console.log("a:", postDecrementA);
console.log("b:", postDecrementB);

// Expected Output:
// a: 19
// b: 20


// ==========================================
// TASK 14 - Pre Decrement
// ==========================================

let preDecrementA = 20;

let preDecrementB = --preDecrementA;

console.log("a:", preDecrementA);
console.log("b:", preDecrementB);

// Expected Output:
// a: 19
// b: 19


// ==========================================
// TASK 15 - Find the Final Values
// ==========================================

let challengeA = 5;

let challengeB = challengeA++;

let challengeC = ++challengeA;

let challengeD = challengeB--;

console.log("a:", challengeA);
console.log("b:", challengeB);
console.log("c:", challengeC);
console.log("d:", challengeD);

// Expected Output:
// a: 7
// b: 5
// c: 7
// d: 6


// ==========================================
// TASK 16 - Assignment Operators
// ==========================================

// +=
let num1 = 10;
num1 += 5;
console.log("After += 5:", num1);

// -=
let num2 = 10;
num2 -= 5;
console.log("After -= 5:", num2);

// *=
let num3 = 10;
num3 *= 5;
console.log("After *= 5:", num3);

// /=
let num4 = 10;
num4 /= 5;
console.log("After /= 5:", num4);

// %=
let num5 = 10;
num5 %= 3;
console.log("After %= 3:", num5);

// **=
let num6 = 10;
num6 **= 2;
console.log("After **= 2:", num6);


// ==========================================
// TASK 17 - Mini Student Profile
// ==========================================

// Variables
let profileName = "Naveen";
let profileAge = 22;
let profileCity = "Trichy";
let profileCollege = "ABC College";

// Array
let favoriteSubjects = [
    "JavaScript",
    "Java",
    "Python",
    "HTML",
    "CSS"
];

// Object
let studentProfile = {
    name: profileName,
    age: profileAge,
    city: profileCity,
    subjects: favoriteSubjects,
    isStudent: true
};

console.log("Student Name:", studentProfile.name);
console.log("Student Age:", studentProfile.age);
console.log("City:", studentProfile.city);
console.log("First Subject:", studentProfile.subjects[0]);
console.log("Last Subject:", studentProfile.subjects[studentProfile.subjects.length - 1]);
console.log("Total Subjects:", studentProfile.subjects.length);
console.log("Complete Object:", studentProfile);


// ==========================================
// FINAL CHALLENGE - User + Calculator
// ==========================================

let firstNumber = Number(prompt("Enter first number:"));
let secondNumber = Number(prompt("Enter second number:"));

console.log("First Number:", firstNumber);
console.log("Second Number:", secondNumber);

console.log("Addition:", firstNumber + secondNumber);
console.log("Subtraction:", firstNumber - secondNumber);
console.log("Multiplication:", firstNumber * secondNumber);
console.log("Division:", firstNumber / secondNumber);
console.log("Modulus:", firstNumber % secondNumber);
console.log("Power:", firstNumber ** secondNumber);