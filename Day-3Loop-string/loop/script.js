
let age = 20;
 result = age >= 20 ? console.log("vote") : console.log("note vote");


//  for loop 
 /* 
 Purpose: Used when the number of iterations is known beforehand.

Structure: Combines initialization, condition checking, and increment/decrement in a single line.

Syntax: */

for (let i = 0; i <= 5; i=i+1){
console.log("Arun mani",i);
}

//calculation sum of 1 to n nnumber;

let sum = 0;
let n = 100;
for (let i = 1; i <= n; i++){
    sum = sum + i;
}
console.log(sum,"sum");


// Infinity loop is all valu true 

// while loop 

/*
Purpose: Executes a block of code as long as a specified condition is true.

Structure: Checks the condition before executing the loop body.

Syntax: */



let i = 1 ; //inisilization

while (i <= 5){               //condition
    console.log("himanshu",i);
    i++; // updation
}



// do-while loop

/* Purpose: Similar to the while loop but guarantees that the loop body executes at least once.

Structure: Executes the loop body first, then checks the condition.

Syntax: */

let j = 1;
do {
console.log("mani namdev",j);
j++;
} while(j < 20);


// for of loop 
/* only for use that arry and string */
 
const array = ["a", "b", "c"];

for (const element of array) {
  console.log(element);
}

// Expected output: "a"
// Expected output: "b"
// Expected output: "c

let str = "arunmaninamdev";

for (let i of str ){ // iterator -> character
    console.log("i = ",i);
}
console.log(str.length)
console.log(typeof(str))

let lang = "JavaScript_ are_Scripting_Languag";
for(let i of lang){
    console.log("i =",i);
}
console.log(lang.length);
console.log(typeof(lang))

// for in loop

/* for in loop are use object */

let student = {
    fullName : "Aditya pal",
    age : 22,
    cgpa: 5.8,
    isPass:false,
    city:"Bhopal"
}

for (let key in student){
 console.log("key",key, "value",student [key]);
}



