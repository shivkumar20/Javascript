const images = document.querySelector('#images')
// console.log(images);


const bowl = document.querySelector('#hardikBowling')
// console.log(bowl);

const google = document.getElementById('google')
// console.log(google);

images.addEventListener('click',function(e) {
    // console.log(e);
    console.log("Images Clicked");
})


//event propogation

google.addEventListener('click', function(e) {
    e.preventDefault()   // avoid redirection
    e.stopPropagation()
    console.log("google clicked");
})



// bowl.addEventListener('click',function(e) {
//     e.stopPropagation()
//     console.log("Hardik Bownling");
// })


bowl.addEventListener('click',function(e) {
    e.stopPropagation()
    // console.log("Hardik Bownling");
    const li = bowl.parentNode
    console.log(li);
    li.removeChild(bowl)

    console.log(li.parentElement);
})