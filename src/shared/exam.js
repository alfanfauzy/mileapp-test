/** Function Swab Variable */
const swabVariable = () => {
	console.log('Swab Variable');

	let a = 3;
	let b = 5;

	console.log(`Initial variable a = ${a}`);
	console.log(`Initial variable b = ${b}`);

	[a, b] = [b, a];

	console.log(`After swab, variable a = ${a}`);
	console.log(`After swab, variable b = ${b}`);
};

/** Function to Find Missing number */
const findMissingNumber = () => {
	const numbers = [
		1, 2, 4, 5, 6, 7, 8, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
		23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40,
		42, 43, 44, 45, 46, 47, 48, 49, 51, 52, 53, 54, 55, 56, 57, 58, 59, 61,
		62, 63, 64, 65, 66, 67, 68, 69, 70, 72, 73, 74, 75, 76, 77, 78, 79, 80,
		81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98,
		99, 100,
	];

	let missingNumber = [];

	for (let index = 1; index <= numbers.length; index++) {
		if (!numbers.includes(index)) missingNumber.push(index);
	}

	return missingNumber;
};

/** Function to Find number which called more than 1 */
const findNumberMoreCalled = () => {
	const numbers = [
		1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
		21, 22, 23, 24, 25, 25, 25, 25, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34,
		34, 34, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49,
		50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 62, 63, 64, 65, 66,
		67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 83,
		83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 92, 93, 94, 95, 96, 97, 98, 99,
		100,
	];

	const sortedNumber = numbers.sort((a, b) => a - b);

	let numberCalled = [];

	for (let index = 1; index < sortedNumber.length; index++) {
		if (sortedNumber[index] === sortedNumber[index - 1])
			if (!numberCalled.includes(sortedNumber[index])) {
				numberCalled.push(sortedNumber[index]);
			}
	}

	return numberCalled;
};

const convertArray = () => {
	const array_code = [
		'1.',
		'1.1.',
		'1.2.',
		'1.3.',
		'1.4.',
		'1.1.1.',
		'1.1.2.',
		'1.1.3.',
		'1.2.1.',
		'1.2.2.',
		'1.3.1.',
		'1.3.2.',
		'1.3.3.',
		'1.3.4.',
		'1.4.1.',
		'1.4.3.',
	];

	const object_code = {};

	console.log(object_code);
};

export { swabVariable, findMissingNumber, findNumberMoreCalled, convertArray };