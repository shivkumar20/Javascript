
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

// console.log(myObj.greeting());

// console.log(myObj);


const User = {
    email:"shiv@google.com",
    fullName:{
        userName:{
            firstName:"shiv",
            lastName:"dhabade"
        }
    },
    age:21

}

// console.log(User.fullName.userName.lastName)


// console.log(Object.keys(User));
// console.log(Object.values(User));
// console.log(User.hasOwnProperty("fullName"));



const Obj1 = {
    1: 'a',
    2:'b'
}

const Obj2 ={
    3:'c',
    4:'d'
}

// console.log(Obj1);
// console.log(Obj2);
// const Obj3 = {...Obj1, ...Obj2}
// console.log(Obj3);


const Obj4 = Object.assign({},Obj1,Obj2)
// console.log(Obj4);



const {"1":one } = Obj1    //object destructuring
console.log(one);