class User{
    constructor(username){
        this.username = username
    }

    show(){
        console.log(`username : ${this.username}`);
    }

    static createID(){
        return "123"
    }
}



let u = new User("shiv")
// u.show()
// u.createID()   //not any object can access this function


//static methods are in scope of class
//u can access it using class name

console.log(User.createID());
