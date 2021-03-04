//Determine the escape velocity of the panetx if its radius is 7149 Km 

const G=6.673e-11;
const radius =7149000;
const mass =1.898e27;

let velocity =Math.sqrt(2*G*mass/radius);

console.log("the velocity is a "+velocity.toFixed(2));