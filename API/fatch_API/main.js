const URL = "https://cat-fact.herokuapp.com/facts";
const factPara = document.querySelector("#fact");
const Btn = document.querySelector("#btn");




const getFacts =  async () => {
    console.log("getting data.......");
   let response = await fetch(URL);
console.log(response);
let data = await response.json();
factPara.innerText = data[0].text;
}
Btn.addEventListener("click, getFacts");

 let a  = getFacts();
 console.log(a);   


//  function getFacts() {
//     fetch(URL).then((response) => {
//        return response.json();
//     })
//     .then((data) => {
//         console.log(data);
//         factPara.innerText = data[2].text;
//     });
//  }

// Btn.addEventListener("click",getFacts);



// getFacts().then(res => console.log("done"));


// Ajax is Asynchoronous js & XML
// Jsonnn is javaScript Object Notaion 
// Json() Method : return a second promise that resolves with the result of parsing the response body text as JSON (Input is jSON, outPut is JS Object);



// HTTP Verbs -> Hyper text transfer Protocol
// Response Status Code;



// Infoormation Responses (100 - 199)
//successful responses (200 - 299)
// Redirection messages(300 - 499)
//client error responses (400 - 499)
//server error responses (500 - 599)