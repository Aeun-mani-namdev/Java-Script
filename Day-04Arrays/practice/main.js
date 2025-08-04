// Q1. For a given arry with marks of student -> [85,97,44,37,76,60] Find the avrage marke of the entire class.

let num = [85,97,44,37,76,60];

let totalNum = 0;

for (let val of num){
    totalNum = totalNum + val;
    
}

let avg = totalNum/num.length;
console.log(`avg marksh of the class = ${avg}`);


// q2. For give array with price of item [250,645,300,900,50] all items have an offer of 10% off on them change the array to store final price after applying offer.

let items = [250,645,300,900,50];
// let index = 0
// for(let val of items){
//     let offer = val / 10;
//     items[index] = items[index] - offer;
//     console.log(`value after offer = ${items[index]}`);
//     index++;
// }
let i = 0;
for(let i = 0; i < items.length; i++){
    let offer = items[i] /10;
    items[i] = items[i] - offer;
}

console.log(items);

// Q3. Create an array to store companies -> "Bloomberg","Microsoft","Google","Uber","IBM","Netflix";
// 1. Remove the first company from the array
//2. Remove uber & add ola in its place
//3. Add amazon at the end.


let companiesName = ["Bloomberg","Microsoft","Google","Uber","IBM","Netflix"];

console.log(companiesName);

companiesName.shift();
console.log(companiesName);

companiesName.splice(2,1,"ola");
console.log(companiesName);

companiesName.push("amazon");
console.log(companiesName);