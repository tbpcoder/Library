function Book(name, author, pages,  read, bookno){
    this.name = name;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.bookno = bookno;
}

let myLibrary = [];

function addBookToLibrary(bookname) {
    myLibrary.push(bookname);
}

function deletebook(bookid){
    myLibrary.splice(bookid, 1)
    for(var i = 0;i < myLibrary.length;i++){
        myLibrary[i].bookno = i;
    }
    display();
}

function changeText(bookid){
    
    let status = myLibrary[bookid].read
    if(status == "Read"){
        myLibrary[bookid].read = "Not read"
    }else{
        myLibrary[bookid].read = "Read"
    }

    display()

}

Book.prototype.info = function(){
    var div = document.createElement('div')
    var title = document.createElement('p');
    var author = document.createElement('p')
    var pages = document.createElement('p')
    var read = document.createElement('button')
    var del  = document.createElement('button')
    var head = document.createElement('span')

    title.innerHTML = "Title : " + this.name
    author.innerHTML = "Author : " + this.author
    pages.innerHTML = "Pages : " + this.pages
    read.innerHTML = this.read;
    del.innerHTML = "Delete"
    head.innerHTML = "BOOK"

    head.setAttribute("style", "font-size: 150%; color: var(--b)")
    div.setAttribute("id", this.bookno)
    del.setAttribute("onClick", "deletebook(this.parentNode.id)")
    read.setAttribute("onClick", "changeText(this.parentNode.id)")

    // del.addEventListener('click', function handleClick(event) {
    //     console.log(event.target.parentElement.innerHTML);
    //   });
    // read.addEventListener('click', function handleClick(event) {
    //     console.log(event.target.parentElement);
    //   });

    div.appendChild(head)
    div.appendChild(title)
    div.appendChild(author)
    div.appendChild(pages)
    div.appendChild(read)
    div.appendChild(del)


    return div

}

function display(){

    var right = document.getElementById('right');

    right.innerHTML = ""

    for (var item of myLibrary){
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
    var read = document.getElementById('read').value
    console.log(read)
    const book = new Book(title, author, pages, read, myLibrary.length)
    

    addBookToLibrary(book);

    display();

    form.reset();
    
})


