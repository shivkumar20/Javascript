function SetUserName (userName){
    this.userName = userName
    console.log(`username is set now ${this.userName}`);
}


function GetUserDetails(userName,Password,Email){
    // SetUserName(userName)   // this will set the username but for the setusername context only not for this context
    // SetUserName.call(userName)  //still it will not set the username for this context bcoz we have not sent the this context to setusername
    
    
    
    
    //this will set the username for both the contexts
    
    SetUserName.call(this,userName)
    this.Password = Password
    this.Email= Email
    console.log("details now set");

}

let user  =  new GetUserDetails("Shivkumar","123","shivkumar@fb.com")
console.log(user);