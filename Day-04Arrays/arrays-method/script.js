// let cityes= ["pune","mumbai","satara","nasik","mudrai",];
// console.log(cityes.push("indeor"));
// console.log(cityes.pop())

let foodItems = ["poteto","apple","litchi","tometo"];
foodItems.push("orange");  // add to end
console.log(foodItems);

let cityes = ["pune", "mumbai", "satara", "nasik",];
cityes.push("indore","bhopal","jaipur","manipur");
console.log(cityes);

let city = ["pune", "mumbai", "satara","nasik"];
city.pop();    // remove to end
console.log(city);


let sub = ["Hindi", "Mathe","Phy","Che","Bio","English"];

console.log(sub);
console.log(sub.toString()); // array to convert string;

let marks = [98,85,44,56,65,5,45,35];
console.log(marks);
console.log(marks.toString()); // array convert to string
console.log(marks);


let marvelHeros = ["thor","spiderman","ironman"];
let dcHeroes = ["suparman","batman"];
let indianheros = ["salman","saruk","ajay","akshay"];
let heros = marvelHeros.concat(dcHeroes,indianheros);  // 1array to 2array to add 

console.log(heros);
console.log(marvelHeros);
console.log(dcHeroes);

 marvelHeros.unshift("antman");  // add to start
 console.log(marvelHeros);

 indianheros.shift();  // remove to start
 console.log(indianheros);

 let southHeros = ["Rajnikant","prabhas","Vijay","alluArjun","maheshBabu","yash"];
 console.log(southHeros);
 console.log(southHeros.slice(2,5));  //slice to cut a slice
 console.log(southHeros.slice(2));
 console.log(southHeros.slice());


 let num = [100,101,102,103,104,105,106,107,108,109];

 console.log(num);
 console.log(`100 plus number${num}`);

console.log(num.splice(1,4));
console.log(num);

let arr = [1,2,3,4,5,6,7,8,9];
arr.splice(2,1);
console.log(arr);

let arr1 = [1,2,3,4,5,6,7,8,9];
arr1.splice(2,3,103,140,105)
console.log(arr1);





