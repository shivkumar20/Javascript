class User{
    constructor(username){
        this.username = username
    }
    ShowUser(){
        console.log(`Username is : ${this.username}`);
    }
}


class Admin extends User{
    constructor(username,password,email){
        super(username)
        this.email= email
        this.password = password
    }

    ShowAdmin(){
        console.log(`Admin name is : ${this.username} password is : ${this.password}  and his email is ${this.email}`);
    }
}


let u = new Admin("Shivkumar","123","shivkumar@oyo.com")
u.ShowAdmin()
u.ShowUser()
console.log(u instanceof User);
console.log(u instanceof Admin);