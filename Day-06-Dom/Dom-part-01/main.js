/*console.log("Hello!");
window.console.log("Hello");
console.log(window);
console.log(window.document);
console.dir(window.document);  */ 

/*
console.dir(document);
console.log(window);
console.log(window.document);
console.dir(document.body);
console.log(document.body);
console.log(document.head);  */

// null -> null ek khali object hai;
// Dom  -> Dynamic changes ya manupulation in are web page;

let header = document.getElementById("DOM-Heading");
console.log(header);


let pera =  document.getElementsByClassName("My-Class");
console.log(pera);

let btn0 = document.getElementById("My-I");
console.log(btn0);

let btn = document.getElementById("My-Id");
console.log(btn);

let content = document.getElementsByTagName("p");
console.log(content);

let firstEl = document.querySelector("p");
console.log(firstEl);

let Element =  document.querySelectorAll("p");
console.log(Element);

let selectorBtn = document.querySelector("#My-Id");
console.log(selectorBtn);
console.log(selectorBtn.tagName);
console.log(selectorBtn.innerText);
console.log(selectorBtn.innerHTML);

let selectorCls = document.querySelectorAll(".My-Class");
console.log(selectorCls);

// sibling  <-> do logo ke ek hi maa Papa ka hona;
//desindant <-> jo Apne vans ko age vadate hai;

/* Dom Node
1. text node
2. comment
3. elements
*/

// let Element1 = document.querySelector(firstEl);
// console.log(Element1);
 
 let  exp = document.getElementsByClassName("My-Class-0");
console.log(exp);
console.log(exp.firstChild.tagname);
console.log(exp.lastChild.tagname);