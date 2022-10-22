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

const createBookCard = (newBook) => {
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
  bookAuthor.classList.add("author");
  readButton.onclick = toggleRead;
  deleteButton.onclick = deleteBook;

  let bookElement = document.createElement("li");

  // Add text to the book card
  let titleContent = document.createTextNode("Title: " + newBook.title);
  let authorContent = document.createTextNode("Author: " + newBook.author);
  let pageCountContent = document.createTextNode(
    "Page Count: " + newBook.pageCount
  );
  let deleteButtonContent = document.createTextNode("Delete");

  if (newBook.read) {
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
  bookTitle.appendChild(titleContent);
  bookCard.appendChild(bookAuthor);
  bookAuthor.appendChild(authorContent);
  bookCard.appendChild(bookPageCount);
  bookPageCount.appendChild(pageCountContent);
  bookCard.appendChild(buttonGroup);
  bookContainer.appendChild(bookCard);
};

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

// User Interface
const addBookButton = document.querySelector("#addBook");
const bookContainer = document.querySelector(".grid-container");
const addBookModal = document.querySelector("#modal");
const cancelButton = document.querySelector(".cancel");
const addButton = document.querySelector(".add-book-btn");

addBookButton.addEventListener("click", openAddBookModal);
cancelButton.addEventListener("click", closeAddBookModal);
addButton.addEventListener("click", addBookToLibrary, closeAddBookModal);

const deleteBook = (e) => {
  const title = e.target.parentNode.parentNode.firstChild.innerHTML.replaceAll(
    " ",
    ""
  );
};

const toggleRead = (e) => {
  const title = e.target.parentNode.parentNode.firstChild.innerHTML.replaceAll(
    " ",
    ""
  );
};
