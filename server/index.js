const express = require("express");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());

const questions = [
	{
		code: `function odin(arr) {
  return [arr[2], arr[1], arr[0]];
}`,
		choices: [
			"Flip the first & last elements of an array",
			"Reverse the order of an array",
			"Return the middle element of an array",
			"Concatenate two arrays",
		],
		correctAnswerIndex: 0,
		attribution: "PG1",
		attributionLink: "https://www.codewars.com/users/PG1",
		furtherReading:
			"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array",
		level: 8,
		kataLink: "https://www.codewars.com/kata/56f699cd9400f5b7d8000b55",
	},
	{
		code: `function thor(health) {
  return health > 0 ? true : false;
}`,
		choices: [
			"Evaluates if health is less than zero.",
			"Checks if health is an even number.",
			"Returns the double of health.",
			"Checks if health is greater than zero.",
		],
		correctAnswerIndex: 3,
		attribution: "danleavitt0",
		attributionLink: "https://www.codewars.com/users/danleavitt0",
		furtherReading:
			"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Greater_than",
		level: 8,
		kataLink: "https://www.codewars.com/kata/57089707fe2d01529f00024a",
	},
	{
		code: `function vallhalla(n){
  return [...Array(n + 1).keys()].map(int => 2 ** int);
}`,
		choices: [
			"Generates a random array of n integers.",
			"Returns an array of powers of 2 from 0 to n.",
			"Calculates the factorial of n.",
			"Creates an array of n even numbers.",
		],
		correctAnswerIndex: 1,
		attribution: "wichu",
		attributionLink: "https://www.codewars.com/users/wichu",
		furtherReading:
			"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array",
		level: 8,
		kataLink: "https://www.codewars.com/kata/57a083a57cb1f31db7000028",
	},
	{
		code: `function loki(n, x, y) {
  return n % x === 0 && n % y === 0;
}`,
		choices: [
			"Checks if n is divisible by either x or y.",
			"Checks if n is divisible by both x and y.",
			"Returns the sum of n, x, and y.",
			"Determines if x and y are factors of n.",
		],
		correctAnswerIndex: 1,
		attribution: "naaz",
		attributionLink: "https://www.codewars.com/users/naaz",
		furtherReading:
			"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_AND",
		level: 8,
		kataLink: "https://www.codewars.com/kata/5545f109004975ea66000086",
	},
	{
		code: `function mjolnir(bool){
  return bool ? "Yes" : "No";
}`,
		choices: [
			'Converts a boolean to "Yes" or "No".',
			"Checks if a boolean is true or false.",
			"Returns the opposite of the boolean.",
			"Converts a boolean to a string.",
		],
		correctAnswerIndex: 0,
		attribution: "weavermedia",
		attributionLink: "https://www.codewars.com/users/weavermedia",
		furtherReading:
			"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator",
		level: 8,
		kataLink: "https://www.codewars.com/kata/53369039d7ab3ac506000467",
	},
	{
		code: `const asgard = (arr) => {
  if (arr.length === 0) return arr;
  return arr.map((num) => num > 0 ? -Math.abs(num): Math.abs(num));
}`,
		choices: [
			"Finds the maximum number in an array.",
			"Returns the absolute value of each element in the array.",
			"Removes all zero values from the array.",
			"Inverts the sign of all non-zero numbers in an array.",
		],
		correctAnswerIndex: 3,
		attribution: "user7657844",
		attributionLink: "https://www.codewars.com/users/user7657844",
		furtherReading:
			"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/abs",
		level: 8,
		kataLink: "https://www.codewars.com/kata/5899dc03bc95b1bf1b0000ad",
	},
	{
		code: `function fenrir(a, b, c) {
  let results = [
    a + b + c,
    a * b * c,
    a + (b * c),
    (a + b) * c,
    a * (b + c)
  ]
  return Math.max(...results);
}`,
		choices: [
			"Sorts the values in ascending order.",
			"Returns the sum of all possible combinations of a, b, and c.",
			"Finds the minimum value from the array.",
			"Returns the maximum result of different arithmetic operations on a, b, and c.",
		],
		correctAnswerIndex: 3,
		attribution: "MrZizoScream",
		attributionLink: "https://www.codewars.com/users/MrZizoScream",
		furtherReading:
			"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/max",
		level: 8,
		kataLink: "https://www.codewars.com/kata/5ae62fcf252e66d44d00008e",
	},
	{
		code: `function bifrost(normPrice, discount, hol) {
  return Math.floor(hol / (normPrice * (discount / 100)));
}`,
		choices: [
			"Determines the original price before the discount.",
			"Calculates how many discounted products you can buy with a given budget.",
			"Returns the total number of products in stock.",
			"Calculates the total savings from a discount.",
		],
		correctAnswerIndex: 1,
		attribution: "PG1",
		attributionLink: "https://www.codewars.com/users/PG1",
		furtherReading:
			"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/floor",
		level: 8,
		kataLink: "https://www.codewars.com/kata/57e92e91b63b6cbac20001e5",
	},
	{
		code: `function baldur(arr, item){
  return arr.some(i => i === item);
}`,
		choices: [
			"Checks if an item exists in the array.",
			"Returns the first occurrence of an item in the array.",
			"Counts how many times an item appears in the array.",
			"Removes the item from the array if it exists.",
		],
		correctAnswerIndex: 0,
		attribution: "bellmyer",
		attributionLink: "https://www.codewars.com/users/bellmyer",
		furtherReading:
			"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some",
		level: 8,
		kataLink: "https://www.codewars.com/kata/545991b4cbae2a5fda000158",
	},
	{
		code: `function midgard(str) {
  return str.split('').every(letter => letter === letter.toUpperCase());
}`,
		choices: [
			"Checks if all characters in a string are uppercase.",
			"Converts all characters in a string to uppercase.",
			"Returns the number of uppercase letters in a string.",
			"Checks if the first character in the string is uppercase.",
		],
		correctAnswerIndex: 0,
		attribution: "donaldsebleung",
		attributionLink: "https://www.codewars.com/users/donaldsebleung",
		furtherReading:
			"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every",
		level: 8,
		kataLink: "https://www.codewars.com/kata/56cd44e1aa4ac7879200010b",
	},
	{
		code: `function heimdall(arr, n) {
  return arr.slice(0, n);
}`,
		choices: [
			"Returns the first n elements of an array.",
			"Removes the first n elements from an array.",
			"Returns the last n elements of an array.",
			"Sorts the array and returns the first n smallest values.",
		],
		correctAnswerIndex: 0,
		attribution: "bellmyer",
		attributionLink: "https://www.codewars.com/users/bellmyer",
		furtherReading:
			"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice",
		level: 8,
		kataLink: "https://www.codewars.com/kata/545afd0761aa4c3055001386",
	},
	{
		code: `function freya(a, limit){
  return a.filter(num => num <= limit).length === a.length;
}`,
		choices: [
			"Returns the sum of all elements in the array less than the limit.",
			"Checks if all elements in the array are less than or equal to the limit.",
			"Counts how many elements in the array are less than or equal to the limit.",
			"Checks if the first element of the array is less than or equal to the limit.",
		],
		correctAnswerIndex: 1,
		attribution: "PG1",
		attributionLink: "https://www.codewars.com/users/donaldsebleung",
		furtherReading:
			"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter",
		level: 7,
		kataLink: "https://www.codewars.com/kata/57cc981a58da9e302a000214",
	},
	{
		code: `function tyr(yggdrasilGoals, vanhallaReyGoals, ragnorokLeagueGoals) {
  return [...arguments].reduce((acc, sum) => acc + sum, 0);
}`,
		choices: [
			"Returns the maximum number of goals from the arguments.",
			"Returns an array of goals in descending order.",
			"Returns the total number of goals across all leagues.",
			"Returns the average number of goals across leagues.",
		],
		correctAnswerIndex: 2,
		attribution: "danleavitt0",
		attributionLink: "https://www.codewars.com/users/danleavitt0",
		furtherReading:
			"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce",
		level: 8,
		kataLink: "https://www.codewars.com/kata/55f73be6e12baaa5900000d4",
	},
	{
		code: `function ragnarok(n) {
	return Math.pow(n, 3);
}`,
		choices: [
			"Returns the square of n.",
			"Returns n raised to the power of 4.",
			"Returns the square root of n.",
			"Returns the cube of n.",
		],
		correctAnswerIndex: 3,
		attribution: "hhelwich",
		attributionLink: "https://www.codewars.com/users/hhelwich",
		furtherReading:
			"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/pow",
		level: 7,
		kataLink: "https://www.codewars.com/kata/55fd2d567d94ac3bc9000064",
	},
	{
		code: `function longship(string) {
  return string.replace(/[!]$/, "");
}`,
		choices: [
			"Removes the exclamation mark from the end of a string.",
			"Removes all exclamation marks from the string.",
			"Adds an exclamation mark to the end of a string.",
			"Replaces the first exclamation mark in the string.",
		],
		correctAnswerIndex: 0,
		attribution: "myjinxin2015",
		attributionLink: "https://www.codewars.com/users/myjinxin2015",
		furtherReading:
			"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp",
		level: 8,
		kataLink: "https://www.codewars.com/kata/57fae964d80daa229d000126",
	},
	{
		code: `function jarl() {
  return ["a", "b", "c", "d", "e"].length;
}`,
		choices: [
			"Returns the sum of the ASCII values of the characters.",
			"Returns the total number of vowels in the array.",
			"Returns the length of the array, which is 5.",
			"Returns the first element of the array.",
		],
		correctAnswerIndex: 2,
		attribution: "KH!",
		attributionLink: "https://www.codewars.com/users/KH!",
		furtherReading:
			"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/length",
		level: 8,
		kataLink: "https://www.codewars.com/kata/59441520102eaa25260000bf",
	},
	{
		code: `function fyrd(s1, s2, s3) {
  const average = [...arguments].reduce((acc, curr) => acc + curr, 0) / [...arguments].length;
  if (average >= 90) return "A";
  if (average >= 80) return "B";
  if (average >= 70) return "C";
  if (average >= 60) return "D";
  return "F";
}`,
		choices: [
			"Returns the maximum of three scores.",
			"Calculates the sum of three scores and returns a letter grade.",
			"Determines the median of three scores and returns a letter grade.",
			"Calculates the average of three scores and returns the corresponding letter grade.",
		],
		correctAnswerIndex: 3,
		attribution: "danleavitt0",
		attributionLink: "https://www.codewars.com/users/danleavitt0",
		furtherReading:
			"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax",
		level: 8,
		kataLink: "https://www.codewars.com/kata/55cbd4ba903825f7970000f5",
	},
	{
		code: `function thing(num) {
  return num + 9;
}`,
		choices: [
			"Concatenates 9 to the given number.",
			"Subtracts 9 from the given number.",
			"Adds 9 to the given number.",
			"Returns the number as a string prefixed with 9.",
		],
		correctAnswerIndex: 2,
		attribution: "danleavitt0",
		attributionLink: "https://www.codewars.com/users/danleavitt0",
		furtherReading:
			"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Addition",
		level: 8,
		kataLink: "https://www.codewars.com/kata/56200d610758762fb0000002",
	},
	{
		code: `function berserker(bin) {
  return parseInt(bin, 2);
}`,
		choices: [
			"Adds two binary numbers and returns their sum.",
			"Converts a binary string to a decimal number.",
			"Converts a decimal number to a binary string.",
			"Returns the number of 1's in a binary string.",
		],
		correctAnswerIndex: 1,
		attribution: "wichu",
		attributionLink: "https://www.codewars.com/users/wichu",
		furtherReading:
			"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseInt",
		level: 8,
		kataLink: "https://www.codewars.com/kata/57a5c31ce298a7e6b7000334",
	},
	{
		code: `function shieldmaiden(n){
  return +n.toString(2);
}`,
		choices: [
			"Converts a number to its binary representation.",
			"Converts a number to a hexadecimal string.",
			"Returns the square root of the number.",
			"Converts a binary string back to a decimal number.",
		],
		correctAnswerIndex: 0,
		attribution: "JapaX",
		attributionLink: "https://www.codewars.com/users/wichu",
		furtherReading:
			"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Unary_plus",
		level: 8,
		kataLink: "https://www.codewars.com/kata/59fca81a5712f9fa4700159a",
	},
	{
		code: `function norm(x) {
  return x.toLowerCase() === x.split("").reverse().join("").toLowerCase();
}`,
		choices: [
			"Counts the number of characters in the string.",
			"Reverses the given string.",
			"Converts the string to lowercase and removes whitespace.",
			"Checks if a string is a palindrome, ignoring case.",
		],
		correctAnswerIndex: 3,
		attribution: "wichu",
		attributionLink: "https://www.codewars.com/users/wichu",
		furtherReading:
			"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join",
		level: 8,
		kataLink: "https://www.codewars.com/kata/57a1fd2ce298a731b20006a4",
	},
];

app.get("/api/questions", (req, res) => {
	res.json(questions);
});

app.listen(PORT, () => {
	console.log(`Server listening at http://localhost:${PORT}/api/questions`);
});
