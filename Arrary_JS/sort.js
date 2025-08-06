const numbers = [7,4,9,3,1,5,8,6];
console.log(numbers);
numbers.sort();
console.log(numbers);

const friends = ['sakib','akib','nokid','bulbul'];
friends.sort();
console.log(friends);

const num = [100,4,10,1,12,20,33];
// num.sort();
// console.log(num); // ans :    1, 10, 100, 12,20,33,4 
// But it is not sorted cz in js alwys sorted by following string wise so it print this elemen 

// avoid this sorted we use a another method :
// assendng
const sorted_num = num.sort(function(a,b) {return a-b});
console.log(sorted_num);
// dissanding

const sorted_num_desc = num.sort(function(a,b) {return b-a});
console.log(sorted_num_desc);
