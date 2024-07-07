const cart = [
    {
        product : "Shoes",
        price: 999
    },
    {
        product : "Pant",
        price: 1999
    },
    {
        product : "Shirt",
        price: 499
    },
    {
        product : "Bag",
        price: 899
    }
]


let TotalPrice = cart.reduce((acc,price)=>{
    return acc+price.price
},0)

// console.log(TotalPrice);


const myNums = [1,2,3,4,5,6]

let totalAdd = myNums.reduce(function (acc,currVal) {
    return acc+currVal
},0)

console.log(totalAdd);