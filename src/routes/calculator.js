const express = require("express");

const ScientificCalculator = require("../controller/scientificCalculator.js");

const router = express.Router();
const calc = new ScientificCalculator();

router.post("/add", (req, res) => {
	const { a, b } = req.body;

	res.send(calc.add(a, b)).status(200);
});

router.post("/sub", (req, res) => {
	const { a, b } = req.body;

	res.send(calc.subtract(a, b)).status(200);
});

router.post("/mul", (req, res) => {
	const { a, b } = req.body;

	res.send(calc.multiply(a, b)).status(200);
});

router.post("/div", (req, res) => {
	const { a, b } = req.body;

	try {
		res.send(calc.divide(a, b)).status(200);
	} catch (error) {
		console.error(error.message);
		res.status(400);
	}
});

router.post("/sin", (req, res) => {
	const { a } = req.body;

	res.send(calc.sin(a)).status(200);
});

router.post("/cos", (req, res) => {
	const { a } = req.body;

	res.send(calc.cos(a)).status(200);
});

router.post("/tan", (req, res) => {
	const { a } = req.body;

	try {
		res.send(calc.tan(a)).status(200);
	} catch (error) {
		console.error(error.message);
		res.status(400);
	}
});

router.post("/lon", (req, res) => {
	const { a } = req.body;

	try {
		res.send(calc.ln(a)).status(200);
	} catch (error) {
		console.error(error.message);
		res.status(400);
	}
});

module.exports = router;
