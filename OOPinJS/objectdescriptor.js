const desc = Object.getOwnPropertyDescriptor(Math,"PI")
// console.log(desc);



const user = {
    name:"shivkumar",
    age:21,
    messgae: function(){
        console.log("shivkumar here friend");
    }
}

const nameDesc = Object.getOwnPropertyDescriptor(user,"name")
console.log(nameDesc);



Object.defineProperty(user,"name",{
    writable:false,
    enumerable:false
})


console.log( Object.getOwnPropertyDescriptor(user,"name"))




for (let [key,value] of Object.entries(user)) {
    if(typeof value !== 'function'){
    console.log(`${key} : ${value}`);
    }
}
