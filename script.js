// DATA STRUCTURES

const { ErrorMessage } = require("formik");

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
  addBookToLibrary() {}
  // remove a book from the library
  removeBook() {}
}

const library = new Library();

function addBookToLibrary() {
  // do stuff here
  let title = document.querySelector("#title").value;
  let author = document.querySelector("#author").value;
  let pageCount = document.querySelector("#pageCount").value;
  let read = document.querySelector("#read").checked;
  let newBook = new Book(title, author, pageCount, read);
  this.books.push(newBook);
  console.log(this.books);
}

// Loop through array and display each book on the page
function displayBooks() {
  // do stuff here
}

const createBookCard = (book) => {
  // Variables for the book card
  const bookCard = document.createElement("div");
  const bookTitle = document.createElement("h3");
  const bookAuthor = document.createElement("h4");
  const bookPageCount = document.createElement("p");
  const buttonGroup = document.createElement("div");
  const readButton = document.createElement("button");
  const deleteButton = document.createElement("button");

  // Add classes to the book card
  bookCard.classList.add("book-card");
  buttonGroup.classList.add("button-group");
  readButton.classList.add("btn");
  deleteButton.classList.add("btn");
  readButton.onclick = toggleRead;
  deleteButton.onclick = deleteBook;

  // Add text to the book card
  bookTitle.textContent = `${book.bookTitle}`;
  author.textContent = `by ${book.bookAuthor}`;
  pageCount.textContent = `${book.bookPageCount} pages`;
  deleteButton.textContent = "Delete";

  if (book.read) {
    readButton.textContent = "Read";
    readButton.classList.add("btn-success");
  } else {
    readButton.textContent = "Not Read";
    readButton.classList.add("btn-danger");
  }

  // Append the book card to the DOM
  buttonGroup.appendChild(readButton);
  buttonGroup.appendChild(deleteButton);
  bookCard.appendChild(bookTitle);
  bookCard.appendChild(bookAuthor);
  bookCard.appendChild(bookPageCount);
  bookCard.appendChild(buttonGroup);
  bookContainer.appendChild(bookCard);
};

const getBookFromInput = () => {
  const bookTitle = document.querySelector("#title").value;
  const bookAuthor = document.querySelector("#author").value;
  const bookPageCount = document.querySelector("#pageCount").value;
  const read = document.querySelector("#read").checked;

  return new Book(bookTitle, bookAuthor, bookPageCount, read);
};

const addBook = (e) => {
  e.preventDefault();
  const book = getBookFromInput();
  library.addBook(book);
  createBookCard(book);

  if (library.isInLibrary(newBook)) {
    errorMessage.textContent = "This book is already in your library";
    errorMessage.classList.add("active");
    return;
  }

  closeAddBookModal();
};

const toggleRead = (e) => {
  const title = e.target.parentNode.parentNode.firstChild.innerHTML.replaceAll(
    " ",
    ""
  );
};
