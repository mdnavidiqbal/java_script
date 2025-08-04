/*
************Data_Types**************
1.String : Stream of Charecter like "Navid Iqbal"
2.Boolean : true / false
3.Number : (+-(0-9))
*/

// String 
var name = "Navid"
console.log(name)
console.log(typeof name)
// Boolean 
var fail = true;
console.log(fail)
console.log(typeof fail)

// Number 
var age = 55;
console.log(age)
console.log(typeof age)

// Basic Js_number 
var pen_price = 25;
var shirt_price = 30;
var total = pen_price + shirt_price
console.log(total)

var lemon_price = 5;
// var tea_price = '10'
var tea_price = (parseInt('10'))
// parseInt : it convert a string to a intiger number
var total2 = lemon_price + tea_price;
console.log(total2)

var nm1 = 0.5;
var nm2 = .25;
var total3 = nm1 + nm2
console.log(total3)
// If we want to see a specific valu after (.) we use totalfixed
console.log(total3.toFixed(1))