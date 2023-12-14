const libContainer = document.querySelector(".library");
const modal = document.querySelector("dialog");
const addBookBtn = document.querySelector("#addBookBtn");
const formBtn = document.querySelector("form>button");
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

const cardDiv = new Element("div", "card");
const titleHeading = new Element("h3", "title");
const authorHeading = new Element("p", "author");
const pageCountHeading = new Element("p", "pageCount");
const readButton = new Element("button", "readBtn");
const ribbonWrapper = new Element("div", "ribbon-wrapper");
const ribbonText = new Element("div", "ribbon");

function addReadRibbon() {
  const ribbon = ribbonWrapper.createBookElement("");
  ribbon.appendChild(ribbonText.createBookElement("READ"));
  return ribbon;
}

function addBookToLibrary(book) {
  const newBook = cardDiv.createBookElement("");

  book.readStatus && newBook.appendChild(addReadRibbon());

  newBook.appendChild(titleHeading.createBookElement(book.title));
  newBook.appendChild(authorHeading.createBookElement(book.author));
  newBook.appendChild(
    pageCountHeading.createBookElement(`${book.pageCount} pages`)
  );
  newBook.appendChild(readButton.createBookElement("READ"));

  libContainer.appendChild(newBook);
}

myLibrary.forEach((book) => addBookToLibrary(book));

cancelSpan.addEventListener("click", () => {
  modal.close();
});
addBookBtn.addEventListener("click", () => {
  modal.showModal();
});
