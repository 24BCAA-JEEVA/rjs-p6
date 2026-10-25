
const numbers = [10, 20, 30, 40, 50];

// Find the sum using reduce()
let sum = 0;

sum = numbers.reduce((total, num) => total + num, 0);

// Do not modify this line
module.exports = sum;
