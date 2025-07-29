// write a code which can give grades to students according to their score;
// 90-100,A
// 70-89 ,B
// 60-69, c
//50-59 ,D
//0-49, F


// let score = 85;

// if(score >= 90 && score <=100){
//     console.log("Grade A");
// } else if(score >=70 && score <=89){
//     console.log("Grade B");
// }else if(score >=60 && score <=69){
//     console.log("Grade c");
// }else if(score >= 50 && score <= 59){
//     console.log("Grade D");
// }else if(score >=30 && score <=49){
//     console.log("Grade only for pass");
// }else {
//     console.log("tumra kuchh nhi ho sakta");
// }

// let score = prompt("Enter your score (0-100):");;

// if(score >= 90 && score <=100){
//     console.log("Grade A");
// } else if(score >=70 && score <=89){
//     console.log("Grade B");
// }else if(score >=60 && score <=69){
//     console.log("Grade c");
// }else if(score >= 50 && score <= 59){
//     console.log("Grade D");
// }else if(score >=30 && score <=49){
//     console.log("Grade only for pass");
// }else {
//     console.log("tumra kuchh nhi ho sakta");
// }

let score = prompt("Enter your score");;
let grade ;
if(score >= 90 && score <=100){
    grade = "A";
} else if(score >=70 && score <=89){
    grade ="B";
}else if(score >=60 && score <=69){
    grade = "C";
}else if(score >= 50 && score <= 59){
    grade = "D";
}else if(score >=30 && score <=49){
    grade = "F";
}

console.log("Your grade is ", grade);
