const books =[
    {
        title : "Book One",
        publish:2002,
        genere : "History"
    },
    {
        
            title : "Book two",
            publish:1999,
            genere : "Fiction"
        
    },
    {
        title : "Book Three",
        publish:2000,
        genere : "Non-Fiction"
    },
    {
        title : "Book Four",
        publish:2004,
        genere : "History"
    }
]


let HistoryBooks = books.filter( (bk) =>{
    return bk.genere === "History"
}) 


let publish = books.filter( (bk)=> (bk.publish >= 2000))
console.log(publish);