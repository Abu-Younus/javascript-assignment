function calculateSum(a, b) {
    return a + b;
}

function isEven(num) {
    return num % 2 === 0;
}

function findMax(array) {
    return Math.max(...array);
}

function reverseString(str) {
    return str.split('').reverse().join('');
}

function filterOddNumbers(array) {
    return array.filter(num => num % 2 !== 0);
}

function sumArray(array) {
    return array.reduce((sum, num) => sum + num, 0);
}

function sortArray(array) {
    return array.slice().sort((a, b) => a - b);
}

function capitalizeFirstLetter(str) {
    if (str.length === 0) return str;
    return str.charAt(0).toUpperCase() + str.slice(1);
}

console.log('Sum of Two Numbers: ', calculateSum(5, 6)); //Output: 11
console.log('\n');

console.log('is Even: ', isEven(6)); //True
console.log('is Even: ', isEven(3)); //False
console.log('\n');

console.log('Max: ', findMax([10, 28, 57, 34, 45])); //Output: 57
console.log('\n');

console.log('Reverse String: ',reverseString("hello")); //Output: olleh
console.log('\n');

console.log('Odd Numbers: ', filterOddNumbers([1, 6, 7, 4, 5])); //Output: [ 1, 7, 5 ]
console.log('\n');

console.log('Sum of Array: ', sumArray([1, 3, 6, 4, 5])); //Output: 19
console.log('\n');

console.log('Sort of Array: ', sortArray([7, 2, 19, 1, 21, 6])); //Output: [ 1, 2, 6, 7, 19, 21 ]
console.log('\n');

console.log('Capitalize Of First Letter: ', capitalizeFirstLetter("hello")); // Output: "Hello"
  