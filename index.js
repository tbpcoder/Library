function Book(name, author, pages,  read){
    this.name = name;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

let myLibrary = [];

function addBookToLibrary(bookname) {
    myLibrary.push(bookname);
}

Book.prototype.info = function(){
    return (`The ${this.name} by ${this.author}, ${this.pages} pages, ${this.read} yet`);
}

const book1 = new Book("Hobbit", "J.R.R. Tolkien", 295, "not read");
addBookToLibrary(book1);
console.log(book1.info());
console.log(myLibrary);

