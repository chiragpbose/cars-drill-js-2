/* 
// ==== Problem #2 ====
// The dealer needs the information on the last car in their inventory. 
Execute a function to find what the make and model of the last car in the inventory is?  
Log the make and model into the console in the format of:
"Last car is a *car make goes here* *car model goes here*"
*/
function problem2fn(inventory){
    let lastID=inventory[inventory.length-1].id;
let op=inventory.filter((x)=>x.id===lastID);
//console.log(lastID);
return op;
}

module.exports.problem2=problem2fn;