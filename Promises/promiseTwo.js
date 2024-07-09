// async function getAllUsers() {

//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//         // console.log(response);
//         const data = await response.json()
      
//         console.log(data);
//     } catch (error) {
//         console.log("ERRor : ",error);
//     }
// }


fetch('https://jsonplaceholder.typicode.com/users')
.then(function(response){
    // console.log(response.json());
    return response.json()
})
.then(function(data){
    console.log(data);
})
.catch(function(error){
    console.log(error);
})

// getAllUsers()