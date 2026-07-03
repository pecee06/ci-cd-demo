const Calculator = require("./calculator.js");

class ScientificCalculator extends Calculator {
	INT_MAX = ~(1 << 31);

	sin(a) {
		return Math.sin(a);
	}

	cos(a) {
		return Math.cos(a);
	}

	tan(a) {
		try {
			let val = Math.tan(a);
			// TODO: Do error handling and return a value
		} catch (error) {
			throw new Error(error.message);
		}
	}

	ln(a) {
		try {
			let val = Math.log(a);
			// TODO: Do error handling and return a value
		} catch (error) {
			throw new Error(error.message);
		}
	}
}

module.exports = ScientificCalculator;
