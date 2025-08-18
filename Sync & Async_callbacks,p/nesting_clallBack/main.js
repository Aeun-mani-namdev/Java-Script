// callback Hell -> Nested callbacks stacked below one another forming a pyramid structure.
// (Pyramid of dom) 
//  this style of programming becomes difficult to understand & manage;

// Nesting 

let age = 5;
if(age >= 18) {
    if(age >= 60){
        console.log("senior");
    }else {
         console.log("middle");
    }
} else {
    console.log("child");
}
 

for (let i = 0; i < 5; i++){
    let str = "";
    for(let j = 0; j < 5; j++){
        str = str + j;
    }
    console.log(i,str);
}


// callback Hell 

/*
function getData(dataId){
    console.log("data",dataId);
}
getData(123);
getData(156); */


function getData1(dataId){
   setTimeout (() => {
     console.log("data",dataId);
   },2000);
}
getData1(123);
getData1(1156);


function getData2 (dataId,getNextData) {
setTimeout(() => {
    console.log("data",dataId);
    if(getNextData){
        getNextData();
    }
},5000);
}

// callBack hell  this is nested call back
getData2(1, () => { 
    console.log("Getting data 2 ......")
    getData2(2, () => {
        console.log("Geting data 3 .....")
        getData2(3, () => {
            console.log("Geting data 4 .....")
            getData2(4, () => {
                console.log("Geting data 5 ......")
                getData2(5, () => {
                    getData2(6, () => {
                        getData2(7)
                    });
                });
            });
        })
    });
});


