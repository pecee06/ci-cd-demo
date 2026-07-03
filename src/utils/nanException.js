class NanException extends Error {
	constructor(msg) {
		super(`ERROR: Not A Number - ${msg}`);
	}
}

module.exports = NanException;
