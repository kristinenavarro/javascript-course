// // JavaScript Fundamentals - Part 1
// // We'll write our code here!

// let js = "amazing";
// console.log (40 + 8 + 23 - 10);
// console.log(js);


// console.log("=== VARIABLES ===");

// let firstName = "Jonas";
// console.log(firstName);

// let age = 30;
// age = 31;
// console.log(age);
 
// const birthYear = 1991;
// console.log(birthYear);

// const PI = 3.1415;
// console.log(PI)

//  var job = "programmer";
//  job = "teacher";
//  console.log(job);

//  const country = "Philippines";
//  const language = "Filipino"

//  age = 25;
//  age =26;

// console.log("=== DATA TYPES ===")


// // number
// let id = 12345;
// console.log(id);
// console.log(typeof id);

// // string
// let lastName = "Navarro"
// console.log(lastName);
// console.log(typeof lastName)

// //Boolean
// let javasciptIsFun = true;
// console.log(javasciptIsFun);
// console.log(typeof javasciptIsFun);

// // undefined (n0 value assigned yet)
// let year;
// console.log(year);
// console.log(typeof year)

// //start as a number
// let dynamicVaribale = 40;
// console.log(dynamicVaribale, typeof dynamicVaribale);

// //chage to a string
// dynamicVaribale = "now I am a string";

// //change to a boolean
// dynamicVaribale = true;
// console.log(dynamicVaribale, typeof dynamicVaribale);



console.log("=== MATH OPERATORS ====");

const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018
console.log(ageJonas, ageSarah);

console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);
console.log("Math operators:");
console.log("Addition:", 10 + 5);
console.log("Subtraction:", 20 - 8);
console.log("Multiplication:", 4 * 7);
console.log("Division:", 2 ** 3);

// math with string
const firstName = "Jonas";
const lastName = "Schmedtmann";
console.log(firstName + " " + lastName);
console.log("Hello " + "World" + "!");
console.log("I am " + 25 + " years old");

// assignment operators
console.log("=== ASSIGNMENT OPERATORS");
let x = 10  + 5;
console.log("x start as:", x);


x +=10;
console.log("x start as:", x);

x *=4;
console.log("x start as:", x);

x /=2;
console.log("x start as:", x);

// Comparison operators
console.log("=== COMPARISON OPERATORS ===");
console.log("Age comparison:");
console.log(ageJonas > ageSarah);
console.log(ageSarah >= 18);
console.log(ageJonas < 30);

console.log("Number Comparison");
console.log(20 > 20);
console.log(15 < 10);
console.log(18 >=18);
console.log(16 <= 15)

const isFullAge = ageSarah >= 18;
console.log("Sarah is adult:", isFullAge);
const isJonasOlder = ageJonas > ageSarah;
console.log("Jonas is older", isJonasOlder);

console.log("Complex Comparison:");
console.log(now - 1191 > now - 2018);

let z, y;
z = y =25 -10 -5;
console.log(x, y);

const averageAge = (ageJonas + ageSarah) / 2;
console.log(ageJonas, ageSarah, averageAge);

// Test data
const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;
//calculate BMI
const BMIMark = massMark / heightMark ** 2;
const BMIJohn = massJohn / (heightJohn *heightJohn);
// create markhigherBMI variable
const markHigherBMI = BMIMark> BMIJohn;
// log result to console
console.log(BMIMark);
console.log(BMIJohn);
console.log(markHigherBMI)



