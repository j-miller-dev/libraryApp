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
}

const library = new Library();

let books = [];

function addBookToLibrary(event) {
  // do stuff here
  let title = document.querySelector("#title").value;
  let author = document.querySelector("#author").value;
  let pageCount = document.querySelector("#pageCount").value;
  let read = document.querySelector("#read").checked;

  let newBook = new Book(title, author, pageCount, read);
  books.push(newBook);

  createBookCard(newBook);

  // set dataset to the index of the book in the array

  // Clear the input fields
  document.querySelector("#title").value = "";
  document.querySelector("#author").value = "";
  document.querySelector("#pageCount").value = "";
  document.querySelector("#read").checked = false;

  // Close the modal
  addBookModal.classList.remove("active");
}

// Loop through array and display each book on the page
function displayBooks() {
  // do stuff here
}

const createBookCard = () => {
  // Variables for the book card
  const bookCard = document.createElement("div");
  bookCard.classList.add("book");
  // bookCard.setAttribute("data-index", `${i}`);

  const bookTitle = document.createElement("h3");
  const bookAuthor = document.createElement("h4");
  const bookPageCount = document.createElement("p");
  const buttonGroup = document.createElement("div");
  const readButton = document.createElement("button");
  const deleteCardButton = document.createElement("button");

  // Add classes to the book card
  bookCard.classList.add("book-card");
  buttonGroup.classList.add("button-group");
  readButton.classList.add("btn-read");
  deleteCardButton.classList.add("btn-delete");
  bookAuthor.classList.add("author");
  deleteCardButton.onclick = deleteBook;

  // Add text to the book card
  let titleContent = document.createTextNode("Title: " + newBook.title);
  let authorContent = document.createTextNode("Author: " + newBook.author);
  let pageCountContent = document.createTextNode(
    "Page Count: " + newBook.pageCount
  );

  if (newBook.read) {
    readButton.textContent = "Read";
    readButton.classList.add("btn-success");
  } else {
    readButton.textContent = "Not Read";
    readButton.classList.add("btn-danger");
  }

  deleteCardButton.textContent = "Delete";

  books.push(newBook);

  // Append the book card to the DOM
  buttonGroup.appendChild(readButton);
  buttonGroup.appendChild(deleteCardButton);

  bookCard.appendChild(bookTitle);
  bookTitle.appendChild(titleContent);
  bookCard.appendChild(bookAuthor);
  bookAuthor.appendChild(authorContent);
  bookCard.appendChild(bookPageCount);
  bookPageCount.appendChild(pageCountContent);
  bookCard.appendChild(buttonGroup);
  bookContainer.appendChild(bookCard);

  readButton.addEventListener("click", () => {
    if (readButton.textContent === "Read") {
      readButton.textContent = "Not Read";
      readButton.classList.remove("btn-success");
      readButton.classList.add("btn-danger");
      newBook.read = "false";
    } else {
      readButton.textContent = "Read";
      readButton.classList.remove("btn-danger");
      readButton.classList.add("btn-success");
      newBook.read = "true";
    }
  });
};
// update book status

const openAddBookModal = () => {
  addBookModal.classList.add("active");
};

const closeAddBookModal = () => {
  addBookModal.classList.remove("active");

  // Clear the input fields
  document.querySelector("#title").value = "";
  document.querySelector("#author").value = "";
  document.querySelector("#pageCount").value = "";
  document.querySelector("#read").checked = false;
};

// const addBook = (e) => {
//   e.preventDefault();
//   const book = getBookFromInput();
//   library.addBook(book);
//   createBookCard(book);

//   if (library.isInLibrary(newBook)) {
//     errorMessage.textContent = "This book is already in your library";
//     errorMessage.classList.add("active");
//     return;
//   }

//   closeAddBookModal();
// };

const deleteBook = (e) => {};

// User Interface
const addBookButton = document.querySelector("#addBook");
const bookContainer = document.querySelector(".grid-container");
const addBookModal = document.querySelector("#modal");
const cancelButton = document.querySelector(".cancel");
const addButton = document.querySelector(".add-book-btn");
// const deleteButton = document.querySelector("btn-delete");
// const readButton = document.querySelector(".btn-read");

addBookButton.addEventListener("click", openAddBookModal);
cancelButton.addEventListener("click", closeAddBookModal);
addButton.addEventListener("click", addBookToLibrary);
// deleteButton.addEventListener("click", deleteBook);
// readButton.addEventListener("click", toggleRead);
