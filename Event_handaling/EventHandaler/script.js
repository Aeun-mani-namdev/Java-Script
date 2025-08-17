let button1 = document.querySelector("#btn-1");

// button1.onclick = () => {
//     console.log("btn1 was clicked");
//     let a = 25;
//     a++;
//     console.log(a);
// }
// Event object 
 
button1.onclick = (e) =>{
console.log(e);
console.log(e.type);
console.log(e.target);
console.log(e.clientX,e.clientY);
}


let box = document.querySelector("div");
// box.onmouseover = () =>{
//     console.log("you are inside div 2");
// }

box.onmouseover = (evt) =>{
console.log(evt);
console.log(evt.type);
console.log(evt.target);
console.log(evt.clientX,evt.clientY); 
}