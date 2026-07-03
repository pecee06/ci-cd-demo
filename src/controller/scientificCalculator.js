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
		let val = Math.tan(a);
		if (val > this.INT_MAX)
			throw new NanException("Input can't be a multiple of pi/2");
		return val;
	}

	ln(a) {
		let val = Math.log(a);
		if (val == -Infinity) throw new NanException("Input can't be 0");
		return val;
	}
}

module.exports = ScientificCalculator;
