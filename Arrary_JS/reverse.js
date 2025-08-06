let number = [1,2,3,4,5];
reversed = [];
for(i = 0; i<number.length;i++){
    console.log(number[i]);
 reversed.unshift(number[i]);
}
console.log(reversed);

//  second way to reverse an array 

let num = [1,2,3,4,5];
for(i = num.length -1 ; i<= 0; i--){
    console.log(num[i]);
}
