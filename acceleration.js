//g=GM/(h+r)**2  <-------- comment

const G=6.673e-11;
const radius = 6.38e6;
const mass = 5.98e24;


let hight =400000;   //variable

let acceleration =G*mass/(radius+hight)**2;

console.log("acceleration is = " +acceleration);