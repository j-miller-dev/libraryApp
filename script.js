"use strict";

const modal = document.getElementById("modal");
const addBook = document.getElementById("addBook");
const cancelBtn = document.getElementById("cancel-btn");
const form = document.querySelector("form");
const addBookBtn = document.getElementById("add-book-btn");

let newBook;

let myLibrary = [
  {
    title: "book 1",
    author: "author 1",
    pages: 412,
    isRead: false,
  },
  {
    title: "book 2",
    author: "author 2",
    pages: 333,
    isRead: true,
  },
];

// Book constructor
class Book {
  constructor(title, author, pages, isRead) {
    // the constructor...
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead;
  }
}

// On page load, load all myLibrary books to the libraryContainer
function libraryUpdate() {
  myLibrary.forEach((book) => {
    displayBook(book);
  });
}

// RENDER FUNCTION - Renders the card on the DOM
function render() {
  // Select library container
  // select ALL books
  // For each current book, remove to stop duplicates

  // Iterate through the length of myLibrary & run displayBook for each index or book
  // displayBook(myLibrary[myLibrary.length - 1]);
  const display = document.getElementById("library-container");
  const books = document.querySelectorAll(".Book");
  books.forEach((book) => display.removeChild(book));

  for (let i = 0; i < myLibrary.length; i++) {
    displayBook(myLibrary[i]);
  }
}

// Create all elements for book and display book
function displayBook(book) {
  // Select the library container and assign to variable
  const libraryContainer = document.getElementById("library-container");
  const bookDiv = document.createElement("div");
  const titleDiv = document.createElement("div");
  const authDiv = document.createElement("div");
  const pageDiv = document.createElement("div");
  const removeBtn = document.createElement("button");
  const readBtn = document.createElement("button");

  bookDiv.classList.add("Book");
  bookDiv.setAttribute("id", myLibrary.indexOf(book));

  titleDiv.textContent = book.title;
  titleDiv.classList.add("title");
  bookDiv.appendChild(titleDiv);

  authDiv.textContent = book.author;
  authDiv.classList.add("author");
  bookDiv.appendChild(authDiv);

  pageDiv.textContent = book.pages;
  pageDiv.classList.add("pages");
  bookDiv.appendChild(pageDiv);

  readBtn.classList.add("readBtn");
  bookDiv.appendChild(readBtn);

  if (book.isRead === false) {
    readBtn.textContent = "Not Read";
    readBtn.style.backgroundColor = "#e04f63";
  } else {
    readBtn.textContent = "Read";
    readBtn.style.backgroundColor = "#63da63";
  }

  removeBtn.textContent = "Remove";
  removeBtn.setAttribute("id", "removeBtn");
  bookDiv.appendChild(removeBtn);

  libraryContainer.appendChild(bookDiv);

  removeBtn.addEventListener("click", () => {
    myLibrary.splice(myLibrary.indexOf(book), 1);

    render();
  });

  //add toggle ability to each book 'read' button on click
  readBtn.addEventListener("click", () => {
    book.isRead = !book.isRead;
    render();
  });
}

// Opens add book modal
addBook.addEventListener("click", () => {
  console.log("click");
  modal.style.display = "flex";
  // Add background overlay
});

// Cancels out of book modal
cancelBtn.addEventListener("click", () => {
  console.log("cancel");
  modal.style.display = "none";
  // Reset form on cancel
  form.reset();
});

// Event listener for addBookToLibrary
addBookBtn.addEventListener("click", () => {
  console.log("book added button clicked");
  addBookToLibrary();
});

// Are these needed?
// function check() {
//   document.getElementById("myCheck").checked = true;
// }

// function uncheck() {
//   document.getElementById("myCheck").checked = false;
// }

let title = document.getElementById("title");
let author = document.getElementById("author");
let pages = document.getElementById("pageCount");
let isRead = document.getElementById("myCheck");
let modalHeader = document.getElementById("modal-header");

function addBookToLibrary() {
  event.preventDefault();
  modal.style.display = "none";

  // Create new book object
  newBook = new Book(title.value, author.value, pages.value, isRead.checked);
  // If book title already exists - try again
  // if (isInLibrary(book)) {
  //   modalHeader.textContent = "Book already exists. Try Another";
  // } else {
  myLibrary.push(newBook);
  form.reset();
  render();
  // }
}

function isInLibrary(book) {
  // finds the first duplicate and returns TRUE if found
  return myLibrary.find((item) => item.title === book.title) !== undefined;
}

window.onload = libraryUpdate();
