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
		try {
			return a / b;
		} catch (error) {
			throw new Error(error.message);
		}
	}
}

module.exports = Calculator;
