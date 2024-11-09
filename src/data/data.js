export const questions = [
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
	},
	{
		code: `function bifrost(normPrice, discount, hol): number{
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
	},
];
