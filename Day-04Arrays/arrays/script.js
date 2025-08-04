//Arrays are collection of items 

/*
let student = {
    fullName : "arun",
    age :22,
    city:"pune",     // is this object
    isPass:true,
    phone:123456789,
}

console.log(`is student ${student.fullName} and age ${student.age}`);
console.log(student.age);
console.log(student.city); */

let marksh =  [97,75,48,83,66];
console.log(marksh);
console.log(marksh.length)
console.log(marksh[0])
console.log(marksh[1])
console.log(marksh[2])
console.log(marksh[3])
console.log(marksh[4])

// Property : property hoti hai jo kuchh valu dedeti hai;
//method : method wah hota hai jo kuchh kaam karta hai;


let heros = ["ironman", "hulk", "saktiman", "spiderman", "antman", "thor"]
console.log(heros);
console.log(typeof heros);
// console.log(heros[]);

//string-> immutable;
//Array-> mutable;

for(let i = 0; i<heros.length; i++){
    console.log(heros[i]);
}

for(let mark of marksh){
 console.log(mark);
}

let cityes = ["pune", "satara", "nasik", "mumbai", "lonavla","indore","bhopal"]
for(let city in cityes){
    console.log(cityes[city]);
}

console.log(cityes[2].toUpperCase())