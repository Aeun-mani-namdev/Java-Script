// Function -> function is a block of code that performs a specific task, can be invoked whenever needed:

// console.log("Hello@");

// "abc".toUpperCase();

// [1,2,3].push(4)


function myFunction() {
    console.log("Welcome to Apna India");
    console.log("We are learning JS :");
}
myFunction();

// myFunction(); is ko function ko call karna bhi kah sakte hai invoke karna bhi kah sakte hai;
// redundance function hame redundance se bachate hai;


// function myFunction(msg) {   // input ko variabl ya peramitar kahte hai
//     console.log(msg);
// }
// myFunction();    


function myFunction(msg) {  // function defination // ese ham peramiter bhi kahte hai
    console.log(msg);
}
myFunction("i love java script"); // function call  // ese ham argument bhi kah dete hai;

// function defination ke andar jis value ko ham use kar rahe hote hai usse ham peramiter kah dete hai aur fnction call ke andar jis value ko ham use kar rahe hote  hai usse ham argument kah dete hai;

// Nan full from not a nummber:

function sum(a,b) {
console.log("two number of sum",a+b);
}
sum(2,5);


function sub(x,y){
    s = x -y;
    return s;
}
let val = sub(23,11);
console.log(val);


function value(c,d){
    storData = c * d;
    console.log("Before Return");
    return storData;
    console.log("After return");
}
let result = value(23,11);
console.log(result);




// function ke je peramiter hoote hai wah local variables of function hote hai -> in ke pass block scop hota hai aye functin ke block tak jinda rahte hai;