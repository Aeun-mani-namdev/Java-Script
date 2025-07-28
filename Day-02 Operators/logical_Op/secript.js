//logical operators
console.log("Logical Operators");
// &&, ||, !


  // and &&
console.log("and operators");
let a  = 6;
let b = 5;
let c = 6;

cond1 = (a < b); // false
cond2 = (a > b); // true
cond3 = (a <= c); // true
cond4 = (a < c); // false
console.log("cond1 && cond3", cond2 && cond3);
console.log( "a>=b && a<=b",a>=b &&  a<=b);

// or ||
console.log("or operators");

console.log("cond1 || cond2", cond1 || cond2);
console.log("cond1 || cond4", cond1 || cond4);

// not !
console.log("not operator");
console.log("!cond1", !(a < b));
console.log("!cond2", !(a > b));
console.log(!(a === 6));
console.log(!(b === 7));

// Ternary Operators;


// let voters = age > 18 ? "you can vote" : "you cannot vote";
// console.log(voters);

const age = 26;
const beverage = age >= 21 ? "Beer" : "Juice";
console.log(beverage); 