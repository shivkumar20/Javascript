//Stack Memory
//Used by primitive datatypes, gives a copy only , no change in original
let myName = "shiv"
let MyFullName =  myName

MyFullName = "Shivkumar"

// console.log(myName)
// console.log(MyFullName)

//Heap memory
//used by non-primitive, gives reference to original, if chanegd then for both will be changed


let UserOne = {
    Name:"Shiv",
    Age:21
}

let UserTwo = UserOne

UserTwo.Name = "Kumar"
console.log(UserOne)
console.log(UserTwo);