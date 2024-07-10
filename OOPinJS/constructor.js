function User (name,age,marks){
    this.name = name
    this.age = age
    this.marks = marks
    this.greeting = function() {
        console.log(`The User Is ${this.name}`);
    }
    // return this    // can automatically return
}



// const userOne = User('Shiv',21,90)
// const userTwo = User('Kumar',22,100)   //this will override the values set by userOne



// so to avoid this use new

const userOne =new User('Shiv',21,90)
const userTwo =new User('Kumar',22,100)
const user = ''
console.log(userOne);
console.log(userTwo);

console.log(userOne.greeting());

console.log( user instanceof User);  //to check whether the object or not 
