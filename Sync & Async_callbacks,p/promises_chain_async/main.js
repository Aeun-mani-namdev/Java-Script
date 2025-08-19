async function hello () {
    console.log("hello");
 }

 hello ();
 /*function asyncFunc () {
    return new Promise ((resolve, reject) => {
        setTimeout (() => {
            console.log("some data1");
            resolve("success");
            // reject("error");
        }, 6000);
    })
}
console.log("fetching data1......")
let p1  = asyncFunc();
// console.log(p1);
p1.then((res) => {
    console.log(res);
}); */

function asyncFunc1 () {
    return new Promise ((resolve, reject) => {
        setTimeout (() => {
            console.log("some data1");
            resolve("success1");
            // reject("error");
        }, 6000);
    })
}

function asyncFunc2 () {
    return new Promise ((resolve, reject) => {
        setTimeout (() => {
            console.log("some data2");
            resolve("success2");
            // reject("error");
        }, 4000);
    })
}
console.log("fetching data1......")
let p1  = asyncFunc1();
// console.log(p1);
p1.then((res) => {
    console.log(res);
});

console.log("fetching data2......")
let p2  = asyncFunc2();
// console.log(p1);
p1.then((res) => {
    console.log(res);
});