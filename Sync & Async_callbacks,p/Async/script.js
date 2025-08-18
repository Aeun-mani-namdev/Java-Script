// console.log("1")
// console.log("2")
// console.log("3")   is this synchonous program;

/*
function hello() {
    console.log("Hello");       
}                               // function

setTimeout(hello,6000);  */     // Asynchonous program

console.log("one")
console.log("Two")

setTimeout(() => {
    console.log("hello");      //synchonous program
}, 4000);


console.log("three")
console.log("four")


// callBack 

function sum(a,b) {
    console.log(a + b);
}

function calculator (a,b, sumCallback) {
    sumCallback(a,b);
}

calculator(1, 2, sum);

const hello = () => {
    console.log("BYYYY");
}
setTimeout(hello, 3000);

// callback Hell -> Nested callbacks stacked below one another forming a pyramid structure.
// (Pyramid of dom) 
//  this style of programming becomes difficult to understand & manage;

// Nesting 

let age = 5;
if(age >= 18) {
    if(age >= 60){
        console.log("senior");
    }else {
         console.log("middle");
    }
} else {
    console.log("child");
}
   