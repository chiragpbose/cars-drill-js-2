/*
// ==== Problem #4 ====
// The accounting team needs all the years from every car on the lot. 
Execute a function that will return an array from the dealer data containing 
only the car years and log the result in the console as it was returned.
*/
function problem4fn(inventory){
    let result=inventory.map((ele)=>ele.car_year);
    return result;
}


module.exports.problem4=problem4fn;
