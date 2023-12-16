const libContainer = document.querySelector(".library");
const modal = document.querySelector("dialog");
const addBookBtn = document.querySelector("#addBookBtn");
const form = document.querySelector("form");
const cancelSpan = document.querySelector(".cancel>span");

const DUMMY_BOOK_1 = new Book("The Giant Within", "Tony Robbins", 300, true);
const DUMMY_BOOK_2 = new Book("The Secret", "Ronda Burnes", 200, true);
const DUMMY_BOOK_3 = new Book(
  "Discipline Is Destiny",
  "Ryan Holiday",
  367,
  false
);

const myLibrary = [DUMMY_BOOK_1, DUMMY_BOOK_2, DUMMY_BOOK_3];

function Book(title, author, pageCount, readStatus) {
  this.title = title;
  this.author = author;
  this.pageCount = pageCount;
  this.readStatus = readStatus;
  // Create card function?
}

function Element(element, classList) {
  this.element = element;
  this.classList = classList;
  this.createBookElement = (textContent) => {
    const newElement = document.createElement(this.element);
    newElement.classList = this.classList;
    newElement.textContent = textContent;
    return newElement;
  };
}

function updateReadStatus(book, buttonNode, ribbonNode, init = false) {
  if (!init) {
    book.readStatus = !book.readStatus;
  }
  if (book.readStatus) {
    buttonNode.classList.add("read");
    ribbonNode.hidden = false;
  } else {
    buttonNode.classList.remove("read");
    ribbonNode.hidden = true;
  }
}

function addBookToLibrary(book) {
  const newBook = cardDiv.createBookElement("");

  const ribbon = ribbonWrapper.createBookElement("");
  ribbon.appendChild(ribbonText.createBookElement("READ"));
  newBook.appendChild(ribbon);
  newBook.appendChild(titleHeading.createBookElement(book.title));
  newBook.appendChild(authorHeading.createBookElement(book.author));
  newBook.appendChild(
    pageCountHeading.createBookElement(`${book.pageCount} pages`)
  );

  const readBtn = readButton.createBookElement("READ");
  readBtn.addEventListener("click", () => {
    updateReadStatus(book, readBtn, ribbon);
  });
  newBook.appendChild(readBtn);

  updateReadStatus(book, readBtn, ribbon, true);
  libContainer.appendChild(newBook);
}

const cardDiv = new Element("div", "card");
const titleHeading = new Element("h3", "title");
const authorHeading = new Element("p", "author");
const pageCountHeading = new Element("p", "pageCount");
const readButton = new Element("button", "readBtn");
const ribbonWrapper = new Element("div", "ribbon-wrapper");
const ribbonText = new Element("div", "ribbon");

myLibrary.forEach((book) => addBookToLibrary(book));

cancelSpan.addEventListener("click", () => {
  modal.close();
});
addBookBtn.addEventListener("click", () => {
  modal.showModal();
});
form.addEventListener("submit", (event) => {
  event.preventDefault();
  const inputs = event.target;

  const newBook = new Book(
    inputs.title.value,
    inputs.author.value,
    inputs.pageCount.value,
    inputs.readStatus.checked
  );

  addBookToLibrary(newBook);
  modal.close();
});
