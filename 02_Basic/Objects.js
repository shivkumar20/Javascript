
const mySymbol =  Symbol("abc")

const myObj = {
    name: "shivkumar",
    "fullName": "shivkumar dhabade",
    age: 21,
    [mySymbol]: "abc",
    isLogin: false,
    loginDays: ["mon","sun"],
    city: "Solapur"
    
}

// console.log(myObj);
// console.log(myObj.age);
// console.log(myObj["fullName"]);

// Object.freeze(myObj)     //to avoid changes to object
// myObj.name = "Shiv"
// console.log(myObj);

myObj.greeting = function() {
    console.log(`Hello there, ${this.fullName}`);
}

console.log(myObj.greeting());

console.log(myObj);