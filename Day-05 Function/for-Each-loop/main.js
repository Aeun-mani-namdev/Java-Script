let arr = [1,2,3,4,5];

arr.forEach(function printVal(val){
    console.log(val);
});

let arr1 = ["Pune","delhi","mumbai"];
arr1. forEach((val,idx,arr) =>{
    console.log(val,idx,arr);
})



// higher order function 

let num = [2,3,4,5,6];
num.forEach((num) =>{
    console.log(num * num)
})


let nums = [67, 52, 39];

let calcSquare = (num) => {
    console.log(num * num);
}
nums.forEach(calcSquare);