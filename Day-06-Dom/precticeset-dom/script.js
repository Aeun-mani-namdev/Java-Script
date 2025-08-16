// Q1. Create a H2 heading elemnt with text - hello java script append from apna college student to this text using js.

let head = document.querySelector("h2");
console.dir(head);
console.log(head);
head.innerText = head.innerText + "from Apna college students";

//Q.2 Create 3 divs with common class name - box Access them & add some unique text to each of them.

let contenar = document.querySelectorAll(".box");
console.log(contenar);
// console.log(contenar[0])
// console.log(contenar[1])
// console.log(contenar[2])
/*
contenar[0].innerText = "new unique value 1";
contenar[1].innerText = "new unique value 2";
contenar[2].innerText = "new unique value 3"; */

let idx = 1;
for (divs of contenar){
divs.innerText = `new unique value ${idx}`;
idx++;
}