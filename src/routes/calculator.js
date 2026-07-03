const express = require("express");

const ScientificCalculator = require("../controller/scientificCalculator.js");

const router = express.Router();
const calc = new ScientificCalculator();

router.post("/add", (req, res) => {
	const { a, b } = req.body;

	res.send(calc.add(Number(a), Number(b))).status(200);
});

router.post("/sub", (req, res) => {
	const { a, b } = req.body;

	res.send(calc.subtract(Number(a), Number(b))).status(200);
});

router.post("/mul", (req, res) => {
	const { a, b } = req.body;

	res.send(calc.multiply(Number(a), Number(b))).status(200);
});

router.post("/div", (req, res) => {
	const { a, b } = req.body;

	try {
		res.send(calc.divide(Number(a), Number(b))).status(200);
	} catch (error) {
		res.send(error.message).status(400);
	}
});

router.post("/sin", (req, res) => {
	const { a } = req.body;

	res.send(calc.sin(Number(a))).status(200);
});

router.post("/cos", (req, res) => {
	const { a } = req.body;

	res.send(calc.cos(Number(a))).status(200);
});

router.post("/tan", (req, res) => {
	const { a } = req.body;

	try {
		res.send(calc.tan(Number(a))).status(200);
	} catch (error) {
		res.send(error.message).status(400);
	}
});

router.post("/lon", (req, res) => {
	const { a } = req.body;

	try {
		res.send(calc.ln(Number(a))).status(200);
	} catch (error) {
		res.send(error.message).status(400);
	}
});

module.exports = router;
