const user = {
    username :"shiv"
}


console.log(user);


// user.shiv()    //this will not run bcoz user object dont have a shiv method



const newUser = {
    name : "kumar",
    age:21,
    shiv  :function() {
        console.log('the name is ',this.name);
    }
}


//newUser.shiv()   //but this will be only accessible to newUser


//shiv function for both the objects


Object.prototype.Shiv = function() {
    console.log("This will be for every object");   
}




user.Shiv()
newUser.Shiv()




//similar for Arrays also


let myHeros = ['thor','spiderman']
let dcHeros = ['superman','flash']
// myHeros.Kumar()   //no such kumar function
console.log(myHeros);
console.log(dcHeros);
Array.prototype.Kumar = function(){
    console.log("Kumar function for all arrays");
}


myHeros.Kumar()
dcHeros.Kumar()