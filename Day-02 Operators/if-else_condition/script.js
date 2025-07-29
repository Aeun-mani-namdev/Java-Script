// conditional statment 
// let age = 19;

// if (age >= 18){
//     console.log("you can vote");
// } else {
//     console.log("Abhi tum bache ho");
// }




 
let mode =  "light-mode";
let color;

if (mode === "dark-mode"){
    color = "black";
}

if(mode === "light-mode"){
    color = "white";
}

console.log("the colir is", color);


// if-else condition
let mode1 = "dark";
let color1 ;

if(mode1 === "dark"){
    color1 = "black";
 } else {
    color1 = "white";
 }

 console.log("the coloi is",color1);



 let age1 = 16;
 if (age1 > 18){
    console.log("vote");
 } else{
    console.log("not vote");
 }


 let num = 98;

 if (num % 2 === 0) {
    console.log("even number");
 } else {
    console.log("odd number");
 }



// if-else condition with multiple conditions
let age = 14;

if (age >= 18){
    console.log("you can vote");
} else if (age <= 17 && age >= 13){
    console.log("you cannot vote");
} else {
    console.log("Abhi tum bache ho");
}

 let mode2 = "silver";
 let color2;

 if(mode2 === "dark"){
    color2 = "black";
 } else if (mode2 === "light-color"){
    color2 = "pink";
 } else if (mode2 === "light-dark"){
    color2 = "blue";
 }else {
    color2 = "white";
 }
 console.log(color2);





// ternary operator

let age2 = 17; 
let result = age2 >=18 ? "you can vote":"you can not vote";
console.log(result);

let age3 = 19; 
result = age3 >=18 ? "you can vote":"you can not vote";
console.log(result);

let age4 = 17; age4 >=18 ? console.log("adult"): console.log("not adult");


// mdn docs