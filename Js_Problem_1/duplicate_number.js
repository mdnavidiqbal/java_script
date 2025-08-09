// Remove duplicate number from a serial or array 
const biriyanikhor = ['abul', 'babul','hasem','abul','babul'];
const numbers = [1,1,2,4,5,5,6,8,8,9];

function unique(arr){
    const unq = [];
    for(const element of arr){
        if(unq.includes(element) === false){
            unq.push(element);
        }
    }
    return unq;
}

const unique_arr = unique(biriyanikhor);
console.log(unique_arr);
// const unq_arr = unique(numbers);
// console.log(unq_arr);

