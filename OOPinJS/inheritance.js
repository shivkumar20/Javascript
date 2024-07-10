const user = {
    userName : "userOne",
    pass:"123"
}


const Admin = {
    Adminid : "a",
    adminName : "shivkumar",
    // __proto__:user              // first way
}

Admin.__proto__ =user             // second way

console.log(Admin.userName);
// console.log(user.adminName);   //this is not possible