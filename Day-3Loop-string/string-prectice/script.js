// Q1.  Prompt the user to enter their full name. generate a username for them based on the input. start username with @, followed by their full name and ending with the fullname length. 

//eg. user name = "Arun mani Namdev", username should be "@arunmani1234"

let fullName = prompt("Enter your full name with out spaces");
let userName = "@"+fullName+fullName.length;

console.log(userName);