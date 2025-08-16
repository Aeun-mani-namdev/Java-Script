/* create a new button element. give it text click me background color of red & text red color of white insert the button as the first element inside the body tag.
*/



let btn = document.createElement("button");
btn.innerText = "click me"
console.log(btn);

let btn2 = document.querySelector("body");
btn.style.backgroundColor = "red"
btn.style.color = "white";
btn2.append(btn);

/*create a <p> tage in html give it a class & some styling.
now create a new class in css and try to append this class to <p> element 
did you notice how you overwrite the class name when you add a new one solve this problem using class its */


let pera = document.querySelector("p");
pera.getAttribute("class");
// pera.setAttribute("class","newClass");
pera.classList.add("class","newClass");
console.log(pera);


/*Exp : div.classList.remove("foo");
div.classList.add("another-class"); */




