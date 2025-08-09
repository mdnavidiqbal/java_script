function odd_average(arr){
    const odd = [];
    for(const numbers of number){
        if(numbers % 2 == 1){
            odd.push(numbers);
        }
    }
    console.log("Odd number is : ",odd);
        sum = 0;
    for(num of odd){
        sum += num;
    }
    const len = odd.length;
    console.log("Sum of odd number is : ",sum);
    const avrg = sum / len;
    return avrg;
}

const number = [1,4,5,3,7,10,40,50];
const avrg = odd_average(number);
console.log("The average of odd number is : ",avrg);
