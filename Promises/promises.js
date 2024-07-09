// const promiseOne = new Promise(function (resolve,reject){
//     setTimeout(function(){
//         console.log("Task 1 Completed");
//         resolve()
//     },1000)
// })


// promiseOne.then(function(){
//     console.log("Promise One Used!");
// }).finally(()=>{
//     console.log("^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^");
// })



// new Promise(function(resolve,reject){
//     setTimeout(() => {
//         console.log("Task 2 Completed");
//         resolve()
//     }, 1000);
// }).then(function(){
//     console.log("Promise Two Used!");
// }).finally(()=>{
//     console.log("=========================================");
// })


// new Promise(function(resolve,reject){
//     setTimeout(() => {
//         console.log("Task 3 completed");
//         resolve({user: "Shivkumar",email:"abc@gmail.com"})
//     }, 1000);
// }).then(function(user){
//     console.log(user);
// })
// .finally(()=>{
//     console.log("++++++++++++++++++++++++++++++++++++++++++++");
// })



// const promiseFour = new Promise(function(resolve,reject){
//     setTimeout(() => {
//         let error = true
//         if(!error){

//             console.log("Task 4 Completed");
//             resolve({userName:"Dhabade"})
//         }
//         else{
//             console.log("Task unable to complete");
//             reject('ERROR : Unable to complete')
//         }
//     }, 1000);
// }).then(function(user){
//     console.log(user);
// }).catch(function(msg){
//     console.log(msg);
// }).finally( () =>{
//     console.log("___________*******_____________");
// })


// //then chaning
// let retVal = new Promise(function(resolve,reject){
//     setTimeout(function(){
//         console.log("task 5 completed");
//         resolve({Name:"Kumar"})
//     },1000)
// })


// retVal.then(function(user){
//     console.log(user);
//     return user.Name
// }).then(function(name) {
//     console.log(name);
// }).finally( ()=>{
//     console.log("---------------------------------------");
// })


//not possible


// const val = retVal.then(function(user){
//     console.log(user);
//     return user.Name
// })

// console.log(val);





// const promiseFive = new Promise(function(resolve,reject){
//     setTimeout(() => {
//         console.log("task 5 completed");
//         resolve({user:"Shivkumar"})
//     }, 1000);
// })


const promiseFive = new Promise(function(resolve,reject){
    setTimeout(() => {
        let error = true
        if(!error){
            
            console.log("task 5 completed");
            resolve({user:"Shivkumar"})
        }
        else{
            console.log("unable to complete job 5");
            reject('ERROR : task 5 incomplete')
        }
    }, 1000);
})


async function consumePromiseFive(){
    try {
        const response = await promiseFive
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}

consumePromiseFive()