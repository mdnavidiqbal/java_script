// 1. Declare an array
// Declare an array with 5 elements containing fruits
// console log the 3rd index element
// change the value of the 2nd index element to jambura
// console log the final array

let fruits = ['banana', 'lemon', 'orange', 'mango', 'jackfruit'];
console.log(fruits[3]);
fruits[2] = 'jambura';
console.log(fruits);

// 2. Add or remove elements
// Declare an array of 3 tourist destinations
// Add a new tourist destination to your tourist array
// Add two more to your array
// Remove the last tourist destination you have added
// display the final array as output

let tourist_destination = ['itali', 'maldives', 'finland'];
tourist_destination.push('japan')
tourist_destination.push('pakistan', 'nepal');
console.log(tourist_destination);
tourist_destination.pop();
console.log(tourist_destination);

// 3. Checking Array Membership with ‘includes’
// Instructions:

// Create an array of books containing different book.

// Use the includes method to check if the array contains a javascript book.

// Print a message to the console indicating whether the element is present in the array or not.

let book_list = ['python', 'c#', 'c++', 'javascript'];
const check_book = book_list.includes('javascript');
if (check_book) {
    console.log("Book is available");
} else {
    console.log("Not available");
}

// 4. Checking if it's an Array
// Instructions:

// Create different variables, each containing either an array or a non-array value.

// Now use isArray to check if each variable is an array.

// Print a message to the console indicating whether each variable is an array or not.

const books = ['JavaScript: The Good Parts', 'Eloquent JavaScript'];
const name = 'Alice';
const scores = [95, 88, 72];
const person = { firstName: 'John', lastName: 'Doe' };

console.log(Array.isArray(books));
console.log(Array.isArray(name));
console.log(Array.isArray(scores));
console.log(Array.isArray(person));

// 5. Combining Arrays
// Instructions:

// Create two arrays of your choice.
// Use the concat method to combine the two arrays into a new array.
// Print both the original arrays and the combined array using console.log().

let first_array = ['navid', 'iqbal', 'turzo'];
let second_array = [23, 1, 40];

const new_array = first_array.concat(second_array);
console.log(new_array);
