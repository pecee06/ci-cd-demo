const Calculator = require("./calculator.js");
const NanException = require("../utils/nanException.js");

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
			if (val > this.INT_MAX) throw new NanException();
			return val;
		} catch (error) {
			throw new Error(error.message);
		}
	}

	ln(a) {
		try {
			let val = Math.log(a);
			if (val == -Infinity) throw new NanException();
			return val;
		} catch (error) {
			throw new Error(error.message);
		}
	}
}

module.exports = ScientificCalculator;
