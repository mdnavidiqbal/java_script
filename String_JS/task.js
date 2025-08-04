/**
 *********Task************
*/

// Task-1 : Count how many times a string has the letter 'a'.

// using spilt() and length() function
// let text = 'javascript';
// let count_a = text.split('a').length - 1;
// console.log(count_a);

// using loop 

// let text_1 = 'javascript';
// let count = 0;
// for(i = 0; i<text_1.length;i++){
//     if(text_1[i] == 'a'){
//         count++
//     }
// }
// console.log(count);

// task_2: Count how many times a string has the letter 'a' & 'A'.

// using split() and length() function
// let text_3 = 'AAabrar';
// let cnt_text = text_3.toLocaleLowerCase().split('a' || 'A').length - 1;
// console.log(cnt_text);

// // using loop
// let txt = 'AAaabbbca';
// let temp = 0;
// for(i = 0; i<txt.length;i++){
//     if(txt[i].toLocaleLowerCase() == 'a'){
//         temp++
//     }
// }
// console.log(temp);

// Task_3: Check whether a string contains all the vowel a,e,i,o,u;

// let text = 'AeIoU';
// let vowels = ['a', 'e', 'i', 'o','u'];
// let check_vowel = true;
// for(let vowel of vowels){
//     if(!text.toLocaleLowerCase().split('').includes(vowel)){
//         check_vowel = false;
//         break;
//     }
// }
// console.log(check_vowel);

// task_4 : If a given string has either x, replace x by y if the given string has X, replace it by Y;
// let text = 'xYyX'
// let final = text.split('x').join('y').split('X').join('Y');
// console.log(final);

// Task_5: 
// let text = 'hello world';
// let final = text.replace(/\b\w/g, char => char.toUpperCase());
// console.log(final);
