const sum = (a, b) => a +b;

const subtract = (a, b) => a - b;

const multiply = (a, b) => a * b;

const divide = (a, b) => {
	if (b === 0) throw new Error('Divide by zero');
	return a / b;
}

const modular = (a, b) => a % b;


module.exports = {
	sum,
	subtract,
	multiply,
	divide,
	modular
}