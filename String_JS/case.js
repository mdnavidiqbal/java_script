/**
 *Here we learn about lowercase ans uppercase 
 */

let name = 'navid';
let nick_name = 'turzo';
console.log(name);
console.log(nick_name);

// Here we use toLowerCase() function that convert the whole string into small letter
let nm_1 = 'NaViD';
nam = nm_1.toLowerCase();
console.log(nam);

// Here we use toUpperCase() function that convert the whole string into capital letter
let nm_2 = 'iqbal';
nam2 = nm_2.toUpperCase();
console.log(nam2);

// string comparision for this comparision first of all we make our string lowercase or uppercase

let subject = 'biology';
let subject_2 = 'Biology'

if(subject == subject_2.toLowerCase()) // if we remove toLowerCase then it prin else portion
{
    console.log('My favourite subject');
} else{
    console.log('Not my favourite');
}
