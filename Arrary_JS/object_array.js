const numbers = [1,4,5,7,8,9];
const players = [
    {name : 'tamim', designation : 'batsman', salary : 500000},
    {name : 'sakib', designation: 'alrounder', salary : 500000},
    {name : 'saifuddin', designation : 'bolwer', salary : 30000}
]
console.log(players);
console.log(players[2].salary);
for(ply of players){
    console.log(ply.salary);
    // console.log(ply.name);
}