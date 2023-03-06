"use strict";

const modal = document.getElementById("modal");
const addBook = document.getElementById("addBook");
const cancelBtn = document.getElementById("cancel-btn");
const form = document.querySelector("form");

addBook.addEventListener("click", () => {
  console.log("click");
  modal.style.display = "flex";
  // Add background overlay
});

cancelBtn.addEventListener("click", () => {
  console.log("cancel");
  modal.style.display = "none";
  // Reset form on cancel
  form.reset();
});

let myLibrary = [];

function Book(title, author, pages, isRead) {
  // the constructor...
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.isRead = isRead;
}

function addBookToLibrary() {
  // do stuff here
  myLibrary.push(book);
}

function isInLibrary(book) {
  // This succinctly (and supposedly) iterates through and finds already existing books
  return myLibrary.find((item) => item.title === book.title) !== undefined;
}
