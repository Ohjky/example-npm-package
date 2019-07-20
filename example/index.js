const { sum, subtract, multiply, divide, modular } = require('../index');
const a = 1, b = 2, c = 0;
console.log(`Sum ${a} with ${b} is ${sum(a, b)}`);
console.log(`Subtract ${a} with ${b} is ${subtract(a, b)}`);
console.log(`Multiply ${a} with ${b} is ${multiply(a, b)}`);
console.log(`Divide ${a} with ${b} is ${divide(a, b)}`);
console.log(`Divide ${a} with ${c} is ${divide(a, c)}`);
console.log(`Modular ${a} with ${b} is ${modular(a, b)}`);


