const libContainer = document.querySelector(".container");
const modal = document.querySelector(".modal");
const addBookBtn = document.querySelector("#addBookBtn");
const formBtn = document.querySelector('')

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
