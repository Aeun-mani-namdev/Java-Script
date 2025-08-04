console.log("loop prectice")
// Q1. Peint all even number from 0 to 100;

for(let i = 0; i <= 100; i=i+1){
    if(i%2 == 0){
   console.log("1 to 100 all even number = ",i);
    }  
}

// Q2. 1 to 100 all odd number 
 for (let i = 0; i<=100; i++){
    if(i%2 ==1){
        console.log("all odd number 1 to 100",i);
    }
 }

 //Q3. 2 table


 let n = 10
 for (let i = 0; i<=n; i++){
     console.log("i =",i, i*2);
   
 }

//Q4. Create a game where you start with any random game number . ask the user to keep guessing the game until the user enters correct value.
let gameNumber= 25;  // "25"
let userNum = prompt("Guess the game number : ");

while (userNum != gameNumber) {  //!==      
  userNum = prompt("You enterd wrong number, gusse again : ");
}
console.log("Congratulation, you enterd the right number", gameNumber);