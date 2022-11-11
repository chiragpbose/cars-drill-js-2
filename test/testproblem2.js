const inventory=require('../data.json');
const exportedproblem=require('../problem2.js');

let result=exportedproblem.problem2(inventory);
console.log(`"Last car is a ${result[0].car_make} ${result[0].car_model}"`);