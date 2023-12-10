const libContainer = document.querySelector(".container");
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const addBookBtn = document.querySelector("#addBookBtn");

const myLibrary = [];

function Book(title, author, pageCount, readStatus) {
  this.title = title;
  this.author = author;
  this.pageCount = pageCount;
  this.readStatus = readStatus;
}

function addBookToLibrary() {}

addBookBtn.addEventListener("click", () => {
  modal.showModal();
});
