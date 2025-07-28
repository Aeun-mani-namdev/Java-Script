console.log("hello world");

alert("Arun mani Namdev");

let name = "arun mani namdev";

console.log(name);

let age = 22;

console.log(age);


age = 24;
console.log(age +2);

let name1 = "Aditya";
age = 23;
city ="indore";
price = 1000.05;

age =24;
// x=null;
// y=undefined;
// console.log(x);
// console.log(y);

console.log(name1, age, city, price);


let x;
console.log(x);

let y = null;
console.log(y);

name = 56;
console.log(name);

let xx = BigInt("123456789");
let yy = Symbol("this is a symbol 123456789!");


//  objects;


const student = {
    fullName: "Arun mani namdev",
    age: 22,
    cgpa:9.5,
    isPass: true,
    subjects: ["maths", "physics","chemestry"],
    address: {
        city:"Indore",
        state: "madhya pradesh",
        country:"India",
        pincode: 452001,
    }
}

console.log(student.fullName)
console.log(student["age"])
console.log(student.address);


const persion = {
    fullName: "Aditya sharma",
    age: 22,
    cgpa:9.5,
    isPass: true,
}
console.log(persion.fullName);

persion["name"] = "Rahul Sharma";
console.log(persion.name);

persion["newAge"] = 28;
console.log(persion.newAge);