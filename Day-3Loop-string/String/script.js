console.log("String")

let str = "It Shaala"
console.log(str.length)
console.log(typeof str)

let str1 = "SalmanSir"
console.log(str1.length);

let strName = "SalmanSirFromITShaala"
console.log(strName.length);
console.log(strName[0])
console.log(strName[1])
console.log(strName[2])
console.log(strName[3])
console.log(strName[4])
console.log(strName[5])
console.log(strName[9])
console.log(strName[13])

//  Template literals in js
//  A way to have embedded expressions in strings
let spaicleString =`This is a template literal`;

console.log(spaicleString)
console.log(typeof spaicleString);
console.log(spaicleString.length)


let obj={
    item : "pen",
    price:10,
};

// console.log("the cost of",obj.item,"is",obj.price,"rupes");
let output = `the cost of ${obj.item} is ${obj.price} rupes`;
console.log(output);
console.log("the cost of",obj.item,"is",obj.price,"rupes");
console.log(`the cost of ${obj.item} is ${obj.price} rupes`);

// Escape chareacturs:
// \t  to create a space:
// \n to change the next line:
let str3 = "Arun\nmani"
console.log(str3);
console.log(typeof str3);
console.log(str3.length);

let fullName = "Arun\tMani\tNamdev"
console.log(fullName);
console.log(fullName.length);

//string these are built-in function to manipulate a string;
let str4 = "it\tshaala";
console.log(str4.toUpperCase());

let str5 = "IT\tSHAALA";
let newstr = str5.toLowerCase();  // immutable
console.log(newstr);   // new string
console.log(str5);  // old string

//trim
 let str6 = "    It Shaala  From   Pune   "
 console.log(str6.trim());



// string method in js 

let str7 = "00123456789";
console.log(str7.slice(3,10)) // strating index & ending index
                              // result 2345678

let str8 = "Hello";
console.log(str8.slice(1,4))  //result ell
console.log(str8.slice(3))    // result lo


let final = str7.concat(str8);   // concatination
console.log(final);


let str9 = "It";
let str10 ="Shaala";
let res = str9.concat(str10);   // concatination
console.log(res);

let fullName1 = "Salman";
let surName = " sir Pune";

console.log(fullName1.concat(surName)); // concatination
console.log(fullName1 + surName); //concatination

let frind = "Aditya" + 420;  // concatination
console.log(frind);

let str11 = "hello"
let str12 = "helololo"
console.log(str11.replace("h","y"));
console.log(str11.replace("lo", "p"));
console.log(str11.replace("ello","ow"));
console.log(str12.replaceAll("lo","p"));


let friendName = "Aditay Pal";
console.log(friendName.charAt(2))
console.log(friendName[2])
console.log(friendName[0])
console.log(friendName[1])
console.log(friendName[2])
console.log(friendName[3])
console.log(friendName[4])
console.log(friendName[5])
console.log(friendName.length);

let string = "i love js";
let str13= string.replace("love","143");
console.log(str13);

let collegeName = "Apna College";
console.log(collegeName);
console.log(collegeName.length);
console.log(typeof collegeName);
console.log(collegeName[0])
console.log(collegeName[1])
console.log(collegeName[2])
console.log(collegeName[3])
console.log(collegeName[4])
console.log(collegeName[5])
console.log(collegeName[11])

let smalChar = "Apna College";
let char = "     apna college   ";
let sirName = "\tAman sir"
console.log(smalChar.toUpperCase());
console.log(smalChar.toLowerCase());
console.log(char.trim());
console.log(smalChar.slice(1,4));
console.log(smalChar.concat(sirName))
console.log(smalChar.replace("p","l"))
console.log(smalChar.replace("A","l"))