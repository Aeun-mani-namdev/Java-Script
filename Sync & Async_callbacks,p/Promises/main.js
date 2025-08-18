// Promenses
/* Promises is for eventual completion of task it is an object in js it is a solution to callback hell.
let promises = new Promise((resolve, reject) => {.....}) */

/* promises are 3 state
1.  panding;
2. fullfile;  //resolve;
3. rejected;  */

// let promise = new Promise ((resolve, reject) => {
//     console.log("i am a promise");
//     reject("some error occurred");
// });



/*
let  promise = new Promise((resolve,reject) => {
 console.log("I am a Promise");
 resolve(123456) 
// reject("some Error ")
});
console.log(promise); 
 */


/*
function getData (dataId,getNextData) {
    return new Promise ((resolve,reject) => {
    setTimeout(() => {
        console.log("data",dataId);
        resolve("success");
        // reject("error");
        if (getNextData) {
            getNextData();
        }
    },4000);
     });
}

let promise = getData (123);
console.log(promise);
 */

// promises 
// .then()  fulll file
// .catch()  reject

const getPromise = () => {
 return new Promise ((resolve, reject) => {
    console.log("i am a promise");
    // resolve ("success");
    reject("Network error");

});
};

let promise = getPromise();
promise.then((res) => {
    console.log("promise fulfilled",res);
});

promise.catch((err) => {
    console.log("rejected",err);
});