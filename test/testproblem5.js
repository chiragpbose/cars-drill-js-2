let inventory= require('../data.json');
let exportedproblem5= require('../problem5');

console.log(exportedproblem5.problem5(inventory));
console.log("number of cars made before 2000: "+exportedproblem5.problem5(inventory).length);