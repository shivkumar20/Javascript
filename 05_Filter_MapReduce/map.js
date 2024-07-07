const myNums = [1,2,3,4,5,6,7,8,9]

// let newNum = myNums.map( (n) => n*10)    //auto return


// let newNum = myNums.map( (n)=>{
//     return n+10
// })



//map and filter chaining

let newNum = myNums.map( (n)=> n*10).map((n) => n+10).filter( (n) => n>40)
console.log(newNum);