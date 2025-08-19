//  This code are error 
 
// function api(){
//     return new promise ((resolve, reject) => {
//         setTimeout(() => {
//             console.log("wather data");
//             resolve (200);
//         },2000);
//     })
// }


// async function getWatherData(){
//     await api();
// }

// let a = getWatherData();
// console.log(a);

// function getData(dataId){
//     return new promise((resolve,reject) => {
//         setTimeout(() => {
//             console.log("data",dataId);
//             resolve("success");
//         },2000);
//     });
// }




function api() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("weather data");
            resolve(200);
        }, 2000);
    });
}

async function getWeatherData() {
    await api();
    a
}

// Calling async function
let a = getWeatherData();
console.log(a);  // This will log a Promise, not the resolved value

function getData(dataId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("data", dataId);
            resolve("success");
        }, 2000);
    });
}

async function getAllData(){
await getData(1);
console.log("getting data1....")
await getData(2);
console.log("getting data2.....")
await getData(3);
console.log("getting data3......")
await getData(4);
console.log("getting data4......")
await getData(5);
console.log("getting data6 .....")
}

let b  = getAllData();
console.log(b);
   
// IIFE ->IIFE is a function that is called immeditely as soon as it is defined;

(async function(){
await getData(1);
console.log("getting data1....")
await getData(2);
console.log("getting data2.....")
await getData(3);
console.log("getting data3......")
await getData(4);
console.log("getting data4......")
await getData(5);
console.log("getting data6 .....")
})();