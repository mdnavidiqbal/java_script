function leap_year(year){
    if(year % 4 === 0 && year % 100 !=0 || year % 400 === 0  ){
        return true;
    }else{
        return false;
    }
}
const Leap_Year = leap_year(2024);
console.log(Leap_Year);
