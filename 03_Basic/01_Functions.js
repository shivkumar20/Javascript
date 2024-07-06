function myFun() {
    console.log("Hello From My function");
}

// myFun()

function myNewFuntion(name = "kumar") {
  console.log(`hello ${name}`);  
}

// myNewFuntion("shiv")
// myNewFuntion()


function Addition(n1,n2) {
    let result = n1+n2
    return result
}

// let result = Addition(10,30)
// console.log("Addition ",result);


// console.log(Addition(2,2));



const user = {
    username:"shivkumar",
    age:21
}

function getObject(obj) {
    console.log(`hello ${obj.username} from the object user`);
}

// getObject(user)

// getObject({
//     username:"vijay",
//     age:26
// })


let myArr = [1,2,3,4]
function getArray(arr) {
    return arr[2]
}

// console.log(getArray(myArr))
// console.log(getArray([10,20,30,40]))



// function getAnyNumberParameter(...scores){
//     return scores
// }


// console.log(getAnyNumberParameter(1000,2000,3000,4000))




function getAnyNumberParameter(n1,n2,...scores){
    return scores
}


console.log(getAnyNumberParameter(1000,2000,3000,4000))