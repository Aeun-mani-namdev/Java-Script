let nums= [67,52,39];

let newArr = nums.map((val) => {
    return val * val;
});

console.log(newArr);


// filter method;

let arr = [1,2,3,4,5,6,7,8,9,];

let evenArr = arr.filter((val) => {
    return val % 2 === 0;  // od number val % 2 !== 0; out put 1,3,5,7,9  
                           // odd number val % 2 ===1; out put 1,3,5,7,9
})

console.log(evenArr);

// Reduce method

let arr1 = [1,2,3,4];
const output = arr1.reduce((res,curr) => {
    return res + curr;
});

console.log(output);

let arr2 = [5,6,2,1,3];
const output1 = arr2.reduce((prev,curr) => {
    return prev > curr ? prev : curr;
});

console.log(output1);