// //Part 1: Thinking Functionally

// Take an array of numbers and return the sum.
let sum = (array) => {
	return array.reduce((prev, curr) => prev + curr, 0);
};
console.log(sum([1, 2, 3]));
// Take an array of numbers and return the average.
let average = (array) => {
	return array.reduce((prev, curr) => prev + curr, 0) / array.length;
};
console.log(average([1, 2, 3]));
// Take an array of strings and return the longest string.
let getLongestString = (array) => {
	let sorted = array.sort((a, b) => a.length - b.length);
	return sorted[sorted.length - 1];
};
console.log(getLongestString(["say", "hello", "morning", "in", "the"]));
// Take an array of strings, and a number and return an array of the strings that are longer than the given number.
// For example, stringsLongerThan(['say', 'hello', 'in', 'the', 'morning'], 3); would return ["hello", "morning"].
let stringsLongerThanNum = (array, num) => {
	return array.filter((el) => el.length > num);
};
console.log(stringsLongerThanNum(["say", "hello", "in", "the", "morning"], 3));
// Take a number, n, and print every number between 1 and n without using loops. Use recursion.
let numbersBetween = (n) => {
	for (let i = 2; i < n; i++) {
		console.log(i);
	}
};
console.log(numbersBetween(5));

//Part 2: Thinking Methodically
let arr = [
	{ id: "42", name: "Bruce", occupation: "Knight", age: "41" },
	{ id: "48", name: "Barry", occupation: "Runner", age: "25" },
	{ id: "57", name: "Bob", occupation: "Fry Cook", age: "19" },
	{ id: "63", name: "Blaine", occupation: "Quiz Master", age: "58" },
	{ id: "7", name: "Bilbo", occupation: "None", age: "111" },
];
// Sort the array by age.
arr.sort((a, b) => Number(a.age) - Number(b.age));
console.log(arr);
// Filter the array to remove entries with an age greater than 50.
console.log(arr.filter((obj) => obj.age > 50));
// Map the array to change the “occupation” key to “job” and increment every age by 1.
console.log(
	arr.map((obj) => {
		let value = obj.occupation;
		delete occupation;
		obj.job = value;
		obj.age++;
		return obj;
	})
);
// Use the reduce method to calculate the sum of the ages.
console.log(arr.reduce((prev, curr) => prev + curr.age, 0));
// Then use the result to calculate the average age.
console.log(arr.reduce((prev, curr) => prev + curr.age, 0) / arr.length);

//Part 3: Thinking Critically
// Take an object and increment its age field.

let incrementAge1 = (obj) => {
	if (!obj["age"]) {
		obj["age"] = 0;
	}
	obj.age = Number(obj.age) + 1;
	return obj;
};
console.log(
	incrementAge1({ id: "42", name: "Bruce", occupation: "Knight", age: "41" })
);
// Take an object, make a copy, and increment the age field of the copy. Return the copy.
let object = { id: "48", name: "Barry", occupation: "Runner" };
let incrementAge2 = (obj) => {
	if (!obj["age"]) {
		obj["age"] = 0;
	}
	let newObj = { ...obj };
	newObj.age = Number(newObj.age) + 1;
	return newObj;
};
console.log(incrementAge2(object), object);
