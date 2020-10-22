const calculate = require('./calculate-back-end.js');


const num1 = process.argv[2];
const operator = process.argv[3];
const num2 = process.argv[4];


const calculation = calculate(num1, num2, operator);
console.log(calculation)


// function getUserInputs(i) {
//     return process.argv[i + 2];
// }

// getUserInputs(()calculate(num1, num2, operator));
