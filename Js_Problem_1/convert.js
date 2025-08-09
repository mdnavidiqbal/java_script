// 12 inch equal to 1 ft 

function ToinchToft(inch){
    const feet = inch / 12;
    return feet;
}
const n_height = ToinchToft(75);
console.log(n_height);

function convert_height(inch){
    const cnvrt = inch / 12;
    const feet_number = parseInt(cnvrt);
    const inch_number = inch % 12;
    const result = feet_number + ' ft ' + inch_number + ' inch. ';
    return result;
}
const c_h = convert_height(75);
console.log(c_h);

