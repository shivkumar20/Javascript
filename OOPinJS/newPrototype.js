let str = " Shiv  "
// console.log(str.length); // ouput will be 7 but actual length is 4 shiv



//similarly
let str2 = "kumar     "
// console.log(str2.length);    //output will be 10 instead of 5



String.prototype.trueLength = function() {
    console.log(`${this}`);      //this will print the string as it is with the spaces
    console.log(`${this}`.trim().length);       //this will remove the spaces and print the lenght of new string
}

str.trueLength()     //every string will now access this function as it is part of "String" 
str2.trueLength()


"     Raje".trueLength()