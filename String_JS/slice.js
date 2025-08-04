/**
 * string slice means cut the string in separate portion where have a starting index and also a ending index
 * slice() function where have two value one for starting index one for ending index 
*/

let name = 'Navid Iqbal Turzo';
slicing_str = name.slice(6,12);
console.log(slicing_str);

/**
 *split() function we use to divide the string into separate portion of string 
 * if we assign any value among the split() function then it divide the string at that position where have this vale or word
*/

const address = 'Mymensingh is my hometown';
// if we don't use gap between to single cot in split function it divide every single word 
console.log(address.split(''));
// if we us gap between split(' ') function then it divide the string into separate portion
console.log(address.split(' '));

const nam = 'Navid Iqbal Turzo';
console.log(nam.split('a'));
const fruits = 'am,jam,kathal,kola,licu'
console.log(fruits.split(','));

/**
 * join() function we use it join the whole string 
*/

const best_friend = ['navid', 'ashraf', 'jihad', 'naeem', 'sadi'];
console.log(best_friend.join('_'));
