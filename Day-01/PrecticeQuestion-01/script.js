const product = {
    title: "ball pen",
    rating: 4.5,
    price: 270,
    offer:true,
    offer:"10% off",
    reviwe:["good", "bad", "average"],
    details: {
        brand: "Bell-pen",
        color: "blue",
        size: "medium",
        weight:"10g",
        madeIn:"India",
        warrent:"1 Year",
    }
}

console.log(product);
console.log(product.typeof)
product["newReview"] = "very good";
console.log(product.newReview);


let string = "hello"

console.log(string.length);
console.log(string+"world");



//  second question;

const profile = {
    userName: "john_done",
    age:25,
    isFollower: false,
    following:100,
    isFollowers:50,

}


console.log(profile);
console.log(typeof profile)
console.log(profile.length)
console.log(typeof profile["userName"]);