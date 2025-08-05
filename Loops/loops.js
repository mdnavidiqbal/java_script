//  Here learn abut loops : 1. for loop and while loop

// for loop : structure : for(initilization;condition;increment/decrement)
let numbers = [1, 2, 3, 4, 5, 6, 7];
console.log(numbers);
for (const num of numbers) {
    console.log(num);
}

let sentence = 'Hello! World';
for (let i = 0; i <= 4; i++) {
    console.log(sentence);
}

/**
 * initialization
 * while(condition){
 * // code to execute
 * increment/decrement
 * }
 */
let name = 'navid';
let n = 0;
while (n < 5) {
    console.log(name);
    n++;
}