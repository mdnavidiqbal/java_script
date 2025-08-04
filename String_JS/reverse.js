const sentence = 'I am science background student';

let reverse = '';
for(const letter of sentence)
{
    reverse = letter + reverse;
}

console.log(reverse)

 //second solution 
// let rev = '';
// for(i = 0; i<sentence.length; i++){
//     // console.log(i);
//     // console.log(sentence[i]);
//     const letter = sentence[i];
//     // rev = letter + rev;
// }
// console.log(rev);

// shortcut method
const reversed = sentence.split('').reverse().join('')
console.log(reversed);

