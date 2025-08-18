btn_1.addEventListener("click", (evt) => {
    console.log("button1 was clicked -handler1");
    // console.log(evt);
    // console.log(evt.type);
});

btn_1.addEventListener("click",() => {
    console.log("button1 was clicked - handler2");
});

const handler3 = () => {
    console.log("button was clicked - handler3");
};
btn_1.addEventListener("click",handler3);

// btn_1.addEventListener("click",() => {
//     console.log("button1 was clicked - handler3");
// });

btn_1.addEventListener("click",() => {
    console.log("button1 was clicked - handler4");
});

btn_1.removeEventListener("click",handler3);

