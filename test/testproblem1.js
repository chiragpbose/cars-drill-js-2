const inventory=require('../data.json');
const exportedproblem=require('../problem1.js');

let result=exportedproblem.problem1(inventory);
console.log(`"Car 33 is a ${result[0].car_year} ${result[0].car_make} ${result[0].car_model}"`);