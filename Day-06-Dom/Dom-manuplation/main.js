let div =  document.querySelector("div");
console.log(div);

let id = div.getAttribute("id");
console.log(id)

let name = div.getAttribute("name");
console.log(name);

let pera = document.querySelector(".pera");
console.log(pera);

let p = pera.getAttribute("class");
console.log(p);
// console.log(pera.getAttribute("class","NewClass"));

p2 = pera.setAttribute("class","NewClass");
console.log(p2);

let h = head.setAttribute("head","1-heading");
console.log(h);

let head1 = document.querySelector(".heading");
console.log(head1)
let h2 = head1.getAttribute("class");
console.log(h2);

let pera1 = document.querySelector(".name2");
console.log(pera1);
let p1 = pera1.setAttribute("class","pullName");
console.log(p1);
