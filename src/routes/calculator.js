const express = require("express");

const ScientificCalculator = require("../controller/scientificCalculator.js");

const router = express.Router();
const calc = new ScientificCalculator();

router.post("/add", (req, res) => {
	const { a, b } = req.body;

	res.send(calc.add(Number(a), Number(b)));
});

router.post("/sub", (req, res) => {
	const { a, b } = req.body;

	res.send(calc.subtract(Number(a), Number(b)));
});

router.post("/mul", (req, res) => {
	const { a, b } = req.body;

	res.send(calc.multiply(Number(a), Number(b)));
});

router.post("/div", (req, res) => {
	const { a, b } = req.body;

	try {
		res.send(calc.divide(Number(a), Number(b)));
	} catch (error) {
		res.status(400).send(error.message);
	}
});

router.post("/sin", (req, res) => {
	const { a } = req.body;

	res.send(calc.sin(Number(a)));
});

router.post("/cos", (req, res) => {
	const { a } = req.body;

	res.send(calc.cos(Number(a)));
});

router.post("/tan", (req, res) => {
	const { a } = req.body;

	try {
		res.send(calc.tan(Number(a)));
	} catch (error) {
		res.status(400).send(error.message);
	}
});

router.post("/lon", (req, res) => {
	const { a } = req.body;

	try {
		res.send(calc.ln(Number(a)));
	} catch (error) {
		res.status(400).send(error.message);
	}
});

module.exports = router;
