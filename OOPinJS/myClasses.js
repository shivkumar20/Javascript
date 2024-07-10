class User{
    constructor(userName,password){
        this.userName = userName
        this.password = password
    }


    EncryptPassword(){
        console.log(`${this.password}x#grds`);
    }


    changeUserName(newuserName){
        this.userName = newuserName
        console.log(`userName Changed ${this.userName}`);
    }
}

let user = new User("shiv",123)
// console.log(user);

// user.EncryptPassword()

// user.changeUserName("Shivkumar Dhabade")
// console.log(user);




//same functionality using the functions

function Customer(CustomerName, password){
    this.CustomerName = CustomerName
    this.password = password
}


Customer.prototype.EncryptPassword = function () {
    console.log(`password encrypted : ${this.password}u0098543`);
}


Customer.prototype.changeCustomerName = function(newName){
    this.CustomerName = newName
    console.log(`customer name is changed -> ${this.CustomerName}`);
}



let newUser = new Customer("Shivkumar","lion")
console.log(newUser);


newUser.EncryptPassword()

newUser.changeCustomerName("Raja")
console.log(newUser);