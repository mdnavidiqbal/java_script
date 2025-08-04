/** Problem -01 ( Divide the Asset ) */
var area = 800;
//write your code here
var assets = area / 2
console.log(assets);

/** Problem -02 ( Cycle or Laptop ) */
var money = 10000;
//write your code here
if (money >= 25000) {
    console.log("Laptop");
} else if (money >= 10000) {
    console.log("Cycle")
} else if (money < 10000) {
    console.log("Chocolate");
}

/** Problem -03 ( Medicine Planner ) */
var lastDay = 11;
//write your code here
for (var i = 1; i <= lastDay; i++) {
    if (i % 3 == 0) {
        console.log(i + " - medicine");
    } else {
        console.log(i + " - rest")
    }
}

/** Problem 04 - (Delete / Store) */
var fileName = "pdfData.jpg";
//write your code here
var execute_decision = "Delete";
if (fileName[0] === '#' || fileName.slice(-4) === '.pdf' || fileName.slice(-5) === '.docx') {
    execute_decision = 'Store';
}
console.log(execute_decision);

/** Problem 05 - ( PH Email Generator )  */
var student = { name: "jhanku", roll: 1014, department: "cse" };
//write your code here
var generating_mail = (student.name + student.roll + '.' + student.department + '@ph.ac.bd');
console.log(generating_mail);

/** Problem 06 :  (Current Salary )  */
var experience = 30;
var startingSalary = 45000;
//write your code here
var new_salary = startingSalary;
var incriment = 1 + (5 / 100);
for (var i = 1; i <= experience; i++) {
    var new_salary = new_salary * incriment;
};
console.log(new_salary.toFixed(2));

