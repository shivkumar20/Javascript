const user ={
    name:"shivkumar",
    age:21,
    message:function () {
        console.log(`${this.name}, welcome`);
    }
}


// user.message()


function myFun() {
    //let username = "shivkumar" // will not work
    this.username = "shivkumar" //this will work
    console.log(this.username)
}

// myFun()


let arrowFun = () =>{
    console.log("hello")
}
// arrowFun()



let arrowAdd = (n1,n2) =>{
    return n1+n2   //if use {} then return must
}

// console.log(arrowAdd(1,2))


let arrowSub = (n1,n2) => (n1-n2)   //no need to return if u use ()
// console.log(arrowSub(20,10));


let returnObjArrow = () =>({username:"shivkumar"})

console.log(returnObjArrow())