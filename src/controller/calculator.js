const NanException = require("../utils/nanException.js");

class Calculator {
	add(a, b) {
		return a + b;
	}

	subtract(a, b) {
		return a - b;
	}

	multiply(a, b) {
		return a * b;
	}

	divide(a, b) {
		if (b == 0) throw new NanException("Division by 0");
		return a / b;
	}
}

module.exports = Calculator;
