

function Book() {
  // the constructor...
  constructor() {
      this.title = title;
      this.author = author;
      this.pageCount = pageCount;
      this.read = read;
  }
}

let myLibrary = [
  (book1 = new Book("The Hobbit", "J.R.R. Tolkien", 295, true)),
  (book2 = new Book("The Fellowship of the Ring", "J.R.R. Tolkien", 423, true)),
  (book3 = new Book("The Two Towers", "J.R.R. Tolkien", 352, true)),
  (book4 = new Book("The Return of the King", "J.R.R. Tolkien", 416, true)),
  (book5 = new Book("The Silmarillion", "J.R.R. Tolkien", 412, true)),
];

function addBookToLibrary() {
  // do stuff here
}

// Loop through array and display each book on the page
function displayBooks() {
  // do stuff here
}
console.log(myLibrary);
