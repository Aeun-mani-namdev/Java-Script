// Q1.  Create a function using the "Function" KeyWord  that takes a string as an argument & return the numer of vowels in the string.

function countVowels(str){
    let count = 0;
 for(const char of str){
   if(char === "a" || char === "e" || char === "i" || char === "o" || char === "u"){
 
    count++ ;
   }
 }
 return count;
}
// countVowels("arunmaninamdev")
let res = countVowels("arunmaninamdev");
console.log(res);

// Q2. Create a function to perforem the same task.

const countVow = (str) => {
     let count = 0;
 for(const char of str){
   if(char === "a" || char === "e" || char === "i" || char === "o" || char === "u"){
 
    count++ ;
   }
 }
 return count;
}
let result = countVow("orientaloftechnologycollege");
console.log(result);

// Q3.  we are given array of marks of students. Filter out of the marks of student that secored 90+

let marks = [ 97,64,32,49,99,96,86];

let toppers = marks.filter((val) =>{
    return val > 90;
});

console.log(toppers);


// Q4. Take a number n as input from user. create an array of number from 1 to n.use the reduce method to calculate sum of all numbers in the array. use the reduce to calculate product of all number in the array.

let n = prompt("Enter a number:");

let arr = [];

for(let i = 1; i <= n; i++){
    arr[i - 1] = i;
}
console.log(arr);

let sum = arr.reduce((res,curr) =>{
    return res + curr;
});

console.log("sum =",sum);

let factorial = arr.reduce((res, curr)=>{
    return res * curr;
});

console.log("factorial =",factorial)