var a = 100

function checkScope() {
    let b = 20
    const c = 30
    // a=1
    // console.log("a= ",a);
}

// console.log("A = ",a);

// checkScope()
// console.log("B = ",b); //error


function ParentFunction() {
    let parent = 1
    function ChildFunction() {
        let child = 2
        console.log("Child : ",child);
        console.log("Parent : ",parent);
    }
    ChildFunction()
    // console.log("child : "+child);   //can't access child variables by parent
}   
ParentFunction()