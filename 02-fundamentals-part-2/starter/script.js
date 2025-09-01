// // console.log("Part 2: Functions ready!");

// // console.log("===Functions===");
// // function logger(){
// //     console.log("My name is Tin");
// // }

// // logger();
// // logger();
// // logger();

// // function fruitProcessor(apples, oranges) {
// //     console.log(apples, oranges);
// //     const juice = `juice with ${apples} apples and orangges`;
// //     return juice;

// // }
// // console.log(fruitProcessor(5, 3));
// // const juice1 = fruitProcessor(5, 0);
// // const juice2 = fruitProcessor(2, 4);
// // const juice3 = fruitProcessor(3, 2);

// // const calcAge = function (birthYear) {
// //     return 2025 - birthYear;
// // };

// // const age1 = calcAge(2004);
// // console.log(age1);

// // function introduce(firstName, lastName, age) {
// //     const introduction = `Hi I'm ${firstName} ${lastName} and I'm ${age} years old.`;
// //     return introduction;
// // }
// // console.log(introduce("kristine navarro", 21));
// // console.log(introduce("Sarah"));

// // function yearsUntilRetirement(birthYear, firstName) {
// //     const currentYear = 2025;
// //     const age = currentYear - birthYear;
// //     const retirementAge = 65;
// //     const yearsLeft = retirementAge - age;

// //     if (yearsLeft > 0) {
// //         return `${firstName} retires in ${yearsLeft} years.`;
// //     } else {
// //         return `${firstName} has already retired.`;
// //     }
// // }

// // console.log(yearsUntilRetirement(2000, "Jonas")); 
// // console.log(yearsUntilRetirement(1950, "Mike"));  

// // const globalVar = " I am global";

// // function testScope() {
// //     const localVar = " i am local";
// //     console.log(globalVar);
// // }
// //  testScope();
// //  console.log(globalVar);

// //  //coding challeng 1
// //  function calcAverage(score1, score2, score3) {
// //   return (score1 + score2 + score3) / 3;
// // }

// // // function to check winner
// // function checkWinner(avgDolphins, avgKoalas) {
// //   if (avgDolphins >= 2 * avgKoalas) {
// //     return `Dolphins win (${avgDolphins} vs. ${avgKoalas})`;
// //   } else if (avgKoalas >= 2 * avgDolphins) {
// //     return ` Koalas win (${avgKoalas} vs. ${avgDolphins})`;
// //   } else {
// //     return `No team wins. (Dolphins: ${avgDolphins}, Koalas: ${avgKoalas})`;
// //   }
// // }

// // // test Data 1
// // let scoreDolphins = calcAverage(44, 23, 71);
// // let scoreKoalas = calcAverage(65, 54, 49);
// // console.log(checkWinner(scoreDolphins, scoreKoalas)); 

// // // test Data 2
// // scoreDolphins = calcAverage(85, 54, 41);
// // scoreKoalas = calcAverage(23, 34, 27);
// // console.log(checkWinner(scoreDolphins, scoreKoalas));


// const student1Grade = 85;
// const student2Grade = 92;
// const student3Grade = 78;

// const grades = [85, 92, 78, 96, 88];
// console.log(grades); 

// console.log("===Array===");
// const friends = ["Michael", "Steven", "Peter"];
// console.log(friends);

// const mixed = ["Jonas", 27, true, friends];
// console.log(mixed);

// const years = new Array (1991, 1984, 2008, 2020);
// console.log(years)

// console.log(friends[0]);
// console.log(friends[1]);
// console.log(friends.length);
// console.log(friends[friends.length - 1]);
// friends[1] = "Jay"
// console.log(friends);

// const firstName = "Jonas";
// const jonas = [firstName,"Jonas", 2037 - 1997];
// console.log(jonas);

// const calcAge = function (birthYear) {
//     return 2037 - birthYear
// }
// const ages = [calcAge(1991), calcAge(1967),calcAge(2002)];
// console.log(ages);

// const newLenght = friends.push("John");
// console.log(friends);
// console.log(newLenght)

// friends.unshift("Mark");
// console.log(friends);

// //removing elements
// const popped = friends.pop();
// console.log(popped);
// console.log(friends);

// const shifted = friends.shift();
// console.log(shifted);
// console.log(friends);

// //finding elements
// console.log(friends.indexOf("Steven"));
// console.log(friends.indexOf("Mark"));

// console.log(friends.includes("Peter"));
// console.log(friends.includes("Bob"));



// for (let index = 0; index < friends.length; index++) {
//     console.log(friends[index]);
// }
// //for each method
// friends.forEach(function (friend, index) {
//   console.log(`${index}: ${friend}`);
// });


// friends.forEach((friend, index) => {
//   console.log(`Friend ${index + 1}: ${friend}`);
// });

// const grade = [85, 92, 78, 96, 88, 74];
// let total = 0;

// for (let index = 0; index < grade.length; index++) {
//    total += grade[index]; 
// }

// const average = total / grade.length;
// console.log(`Average grade: ${average.toFixed(2)}`);

// let passedCount = 0;
// grades.forEach((grade) => {
//   if (grade >= 70) passedCount++;
// });
// console.log(`${passedCount} out of ${grades.length} students passed`);

// //solution

// const grades1 = [78, 85, 92, 67, 88, 95, 73, 82];


// function calculateAverage(grades) {
//   let total = 0;
//   for (let i = 0; i < grades.length; i++) {
//     total += grades[i];
//   }
//   return total / grades.length;
// }


// function findHighestGrade(grades) {
//   let highest = grades[0];
//   for (let i = 1; i < grades.length; i++) {
//     if (grades[i] > highest) {
//       highest = grades[i];
//     }
//   }
//   return highest;
// }


// function findLowestGrade(grades) {
//   let lowest = grades[0];
//   for (let i = 1; i < grades.length; i++) {
//     if (grades[i] < lowest) {
//       lowest = grades[i];
//     }
//   }
//   return lowest;
// }


// function countPassing(grades, passingGrade) {
//   let count = 0;
//   for (let i = 0; i < grades.length; i++) {
//     if (grades[i] >= passingGrade) {
//       count++;
//     }
//   }
//   return count;
// }


// const averages = calculateAverage(grades);
// const highest = findHighestGrade(grades);
// const lowest = findLowestGrade(grades);
// const passing = countPassing(grades, 70);

// console.log("=== GRADE REPORT ===");
// console.log(`Average: ${average.toFixed(2)}`);
// console.log(`Highest: ${highest}`);
// console.log(`Lowest: ${lowest}`);
// console.log(`Passing students: ${passing} out of ${grades.length}`);



// const kristineArray = [
//   "kristine",
//   "navarro",
//   2025 - 2000,
//   "Teacher"
//   ["Michael", "Peter", "Steven"],
// ];

// console.log(kristineArray[0]);
// console.log(kristineArray[1]);

// const kristineObject = {
//   firstName: 'Kristine',
//   lastName: 'Navarro',
//   age: 2025 - 2000,
//   job: "Teacher",
//   friends: ["Michael", "Peter", "Steven"],
// };
// console.log(kristineObject);

// //Property acces method
// console.log(kristineObject.firstName);
// console.log(kristineObject.lastName);
// console.log(kristineObject.age);

// // bracket notation
// console.log(kristineObject["firstName"]);
// console.log(kristineObject["lastName"]);
// console.log(kristineObject["age"]);

// const nameKey = "Name";
// console.log(kristineObject['first' + nameKey]);

// // modifying existing properties
// kristineObject.job = "Programmer";
// kristineObject["age"] = 30;
// console.log(kristineObject);

// // add new properties
// kristineObject.location = "Philippines";
// kristineObject["twitter" ]= "kristineprogrammer";
// kristineObject.hasDriverlicense = true;
// console.log(kristineObject);

// const property = "job";
// console.log(kristineObject[property]);

// arrays
// const listOfYears = [1991, 1984, 2008, 2020];
// const shoppingList = ["apples", "bananas", "milk", "bread"];
// const testScores = [85, 92, 78, 96];

// // objects
// const person = {
//   name: "Jonas",
//   age: 46,
//   occupatation: "Teacher",
// };
// const car = {
//   brand: "Toyota",
//   model: "Camry", 
//   year: 2020,
//   color: "Blue",
// };


// const student = {
//   name: 'Sarah',
//   grades: [85, 92, 78],
//   address: {
//     street: "124 Main St",
//     city: "New York",
//   }
// };
// console.log(student.grades[0]);
// console.log(student.address.city);

// const john  = {
//   firstName: "John",
//   lastName: "Doe",
//   birthYear: 1995,
//   job: "Teacher",
//   friends: ["Michael", "Peter", "Steven"],
//   hasDriverLicense: true,

// calcAge: function (birthYear){
//   return 2025 - birthYear;
// },
// };

// console.log(john.calcAge(2000));

// //this keyword
// const johnImproved ={
//   firstName: "john",
//   lastName: "Doe",
//   birthYear: 1995,
//   job: "Teacher",
//   friends: ["Michael", "Peter", "Steven"],
//   hasDriverLicense: true,
//   calcAge: function() {
//     console.log(this);
//     return 2025 - this.birthYear;
//   },
// };
// console.log(johnImproved.calcAge());

////////////////////////////////////
// Coding Challenge #3 - User Profile System

const user = {
  firstName: "Sarah",
  lastName: "Johnson",
  birthYear: 1995,
  location: "New York",
  interests: ["photography", "travel", "coding"],
  friends: [
    { name: "Michael", status: "active" },
    { name: "Emma", status: "inactive" },
    { name: "David", status: "active" },
  ],
  isActive: true,

  // Calculate age method
  calcAge: function () {
    const currentYear = new Date().getFullYear();
    this.age = currentYear - this.birthYear;
    return this.age;
  },

  // Add friend method
  addFriend: function (name, status = "active") {
    this.friends.push({ name, status });
    return this.friends.length;
  },

  // Get active friends count
  getActiveFriends: function () {
    return this.friends.filter(friend => friend.status === "active").length;
  },

  // Toggle active status
  toggleStatus: function () {
    this.isActive = !this.isActive;
    return this.isActive;
  },

  // Generate profile summary
  getSummary: function () {
    this.calcAge(); // ensure age is updated
    return `${this.firstName} ${this.lastName} (${this.age}) from ${this.location}\n` +
           `  Currently ${this.isActive ? "online" : "away"}\n` +
           `  ${this.getActiveFriends()} active friends out of ${this.friends.length} total\n` +
           `  Interest: ${this.interests.join(", ")}\n` +
           `  Connected and sharing life’s adventures`;
  },
};

// Test your user profile system
console.log(user.getSummary());
user.addFriend("Alex", "active");
user.toggleStatus();
console.log(`\nAfter updates:`);
console.log(user.getSummary());
