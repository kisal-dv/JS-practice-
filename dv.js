let book = {
    title:"dragon",
    author:"kisal",
    age:23,
    genres: ["Fiction", "Classic", "Drama"],
    isavailabale:true,

};

function printbookdetails(book) {

    console.log(`Title: ${book.title}`);
    console.log(`Author: ${book.author}`);
    console.log(`Age: ${book.age}`);
    console.log(`Genres: ${book.genres.join(',')}`);
    
}

if (book.isavailabale) {
    console.log("Book is available .")
    
} else {
console.log("out of stock !")
    
}


printbookdetails(book);