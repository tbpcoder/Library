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
    var div = document.createElement('div')
    var title = document.createElement('p');
    var author = document.createElement('p')
    var pages = document.createElement('p')
    var read = document.createElement('button')
    var del = document.createElement('button')
    
    title.innerHTML = "Title : " + this.name
    author.innerHTML = "Author : " + this.author
    pages.innerHTML = "Pages : " + this.pages
    read.innerHTML = this.read;
    del.innerHTML = "Delete"

    div.appendChild(title)
    div.appendChild(author)
    div.appendChild(pages)
    div.appendChild(read)
    div.appendChild(del)

    return div

}

function display(){

    var right = document.getElementById('right');

    for (var item in myLibrary){
        var tag = item.info()
        right.appendChild(tag)
    }

}

var form = document.getElementById('form')

form.addEventListener('submit', function(event){
    event.preventDefault()
    var title = document.getElementById('title').value
    var author = document.getElementById('author').value
    var pages = document.getElementById('pages').value
    var cars = document.getElementById('read').value

    const book = new Book(title, author, pages, cars)

    addBookToLibrary(book);

    display();
    
})


