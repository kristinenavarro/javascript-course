console.log("Part 2: Functions ready!");

console.log("===Functions===");
function logger(){
    console.log("My name is Tin");
}

logger();
logger();
logger();

function fruitProcessor(apples, oranges) {
    console.log(apples, oranges);
    const juice = `juice with ${apples} apples and orangges`;
    return juice;

}
console.log(fruitProcessor(5, 3));
const juice1 = fruitProcessor(5, 0);
const juice2 = fruitProcessor(2, 4);
const juice3 = fruitProcessor(3, 2);

const calcAge = function (birthYear) {
    return 2025 - birthYear;
};

const age1 = calcAge(2004);
console.log(age1);

function introduce(firstName, lastName, age) {
    const introduction = `Hi I'm ${firstName} ${lastName} and I'm ${age} years old.`;
    return introduction;
}
console.log(introduce("kristine navarro", 21));
console.log(introduce("Sarah"));

function yearsUntilRetirement(birthYear, firstName) {
    const currentYear = 2025;
    const age = currentYear - birthYear;
    const retirementAge = 65;
    const yearsLeft = retirementAge - age;

    if (yearsLeft > 0) {
        return `${firstName} retires in ${yearsLeft} years.`;
    } else {
        return `${firstName} has already retired.`;
    }
}

console.log(yearsUntilRetirement(2000, "Jonas")); 
console.log(yearsUntilRetirement(1950, "Mike"));  

const globalVar = " I am global";

function testScope() {
    const localVar = " i am local";
    console.log(globalVar);
}
 testScope();
 console.log(globalVar);

 //coding challeng 1
 function calcAverage(score1, score2, score3) {
  return (score1 + score2 + score3) / 3;
}

// function to check winner
function checkWinner(avgDolphins, avgKoalas) {
  if (avgDolphins >= 2 * avgKoalas) {
    return `Dolphins win (${avgDolphins} vs. ${avgKoalas})`;
  } else if (avgKoalas >= 2 * avgDolphins) {
    return ` Koalas win (${avgKoalas} vs. ${avgDolphins})`;
  } else {
    return `No team wins. (Dolphins: ${avgDolphins}, Koalas: ${avgKoalas})`;
  }
}

// test Data 1
let scoreDolphins = calcAverage(44, 23, 71);
let scoreKoalas = calcAverage(65, 54, 49);
console.log(checkWinner(scoreDolphins, scoreKoalas)); 

// test Data 2
scoreDolphins = calcAverage(85, 54, 41);
scoreKoalas = calcAverage(23, 34, 27);
console.log(checkWinner(scoreDolphins, scoreKoalas));
