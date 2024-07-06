// (
//     function myFun() {
//         console.log("hello from iife")
//     }
// )();



// (
//     ()=>{
//         console.log("hello from arrow iife");
//     }
// )();


//to avoid pollution due to global issues
//to execute code immediately


function DefaultFunction() {
    console.log("this is default function");
}



DefaultFunction();



//no need to call the IIFE methods

(
    (name) =>{
        console.log(`Hello ${name} from IIFE`);
    }
)("Shivkumar");