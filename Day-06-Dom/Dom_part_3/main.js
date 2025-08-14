let newBtn = document.createElement("button");
newBtn.innerText = "cleckMe!"
console.log(newBtn);
let box1 = document.querySelector("div");
// box1.append(newBtn); // end -> Inserts content at the end of the selected element, making it the last child.
// box1.prepend(newBtn);  //start -> Inserts content at the beginning of the selected element, making it the first child.
// box1.before(newBtn);  // -> Inserts content before the selected element, as its previous sibling.
box1.after(newBtn); // -> Inserts content after the selected element, as its next sibling.


let fullName = document.createElement("h1");
fullName.innerText = "Arun mani"
console.log(fullName);
let faltuText = document.querySelector(".pera");
faltuText.after(fullName);  //15:59sec

let newHeading = document.createElement("h3");
newHeading.innerText = "it's new Heading"
console.log(newHeading);

let head = document.querySelector("body");
head.before(newHeading);











// append()

// Functionality: Inserts content at the end of the selected element, making it the last child.

// Usage Example:
/*
  const parent = document.getElementById("parent");
  const newElement = document.createElement("h3");
  newElement.textContent = "Appended paragraph.";
  parent.append(newElement); */


// Note: You can append multiple nodes or strings at once.



// prepend()

// Functionality: Inserts content at the beginning of the selected element, making it the first child.

// Usage Example:
/*
  const parent1 = document.getElementById("parent1");
  const newElement1 = document.createElement("h1");
  newElement1.textContent = "Prepended paragraph.";
  parent1.prepend(newElement1);
*/

// Note: Like append(), it can insert multiple nodes or strings



// after()

// Functionality: Inserts content after the selected element, as its next sibling.

// Usage Example:
/*
  const reference = document.getElementById("reference");
  const newElement2 = document.createElement("h4");
  newElement2.textContent = "Paragraph after reference.";
  reference.after(newElement2);

*/

//   before()

// Functionality: Inserts content before the selected element, as its previous sibling.

// Usage Example:
/*
  const reference2 = document.getElementById("reference1");
  const newElement3 = document.createElement("div");
  newElement3.textContent = "Paragraph before reference.";
  reference2.before(newElement3);
*/