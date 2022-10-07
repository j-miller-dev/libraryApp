// DATA STRUCTURES

// Book constructor
class Book {
  // the constructor...
  constructor(
    title = "No Title",
    author = "No Author",
    pageCount = "0",
    read = false
  ) {
    this.title = title;
    this.author = author;
    this.pageCount = pageCount;
    this.read = read;
  }
}

// Library constructor
class Library {
  constructor() {
    this.books = [];
  }
  // add a book to the library
  addBook() {}
  // remove a book from the library
  removeBook() {}
}

const library = new Library();

let myLibrary = [
  (book1 = new Book("The Hobbit", "J.R.R. Tolkien", 295, true)),
  (book2 = new Book("The Fellowship of the Ring", "J.R.R. Tolkien", 423, true)),
];

function addBookToLibrary() {
  // do stuff here
}

// Loop through array and display each book on the page
function displayBooks() {
  // do stuff here
}
console.log(myLibrary);
