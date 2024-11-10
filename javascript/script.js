const main = document.querySelector(".main");

const myLibrary = [];

function Book(title, author, pages, status) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.status = status;
}

function addBookToLibrary(title, author, pages, status) {
  const book = new Book(title, author, pages, status);
  myLibrary.push(book);
  displayBook(myLibrary);
}

function displayBook(array) {
  main.textContent = "";
  for (let book of array) {
    let count = 0;
    const card = document.createElement("div");
    card.setAttribute("class", "card");
    main.appendChild(card);

    //Create card elements
    const title = document.createElement("p");
    title.setAttribute("class", "title");
    title.textContent = `Title: ${book.title}`;
    card.appendChild(title);

    const author = document.createElement("p");
    author.setAttribute("class", "author");
    author.textContent = `Author: ${book.author}`;
    card.appendChild(author);

    const pages = document.createElement("p");
    pages.setAttribute("class", "pages");
    pages.textContent = `Pages: ${book.pages}`;
    card.appendChild(pages);

    const status = document.createElement("p");
    status.setAttribute("class", "status");
    status.textContent = `Status: ${book.status}`;
    card.appendChild(status);

    const removeBtn = document.createElement("button");
    removeBtn.setAttribute("id", "removeBtn");
    removeBtn.textContent = "Remove";
    removeBtn.addEventListener("click", () => {
      card.remove();
    });
    card.appendChild(removeBtn);

    const statusBtn = document.createElement("button");
    statusBtn.setAttribute("id", "statusBtn");
    statusBtn.textContent = "Status";
    statusBtn.addEventListener("click", () => {
      if (status.textContent == `Status: read`) {
        status.textContent = `Status: not read yet`;
      } else {
        status.textContent = `Status: read`;
      }
    });
    card.appendChild(statusBtn);
  }
}

addBookToLibrary("The Cid", "Corneille", 1, "read");
addBookToLibrary("The Cid", "Corneille", 2, "read");
addBookToLibrary("The Cid", "Corneille", 3, "read");
addBookToLibrary("The Cid", "Corneille", 4, "read");

const dialog = document.querySelector("dialog");
const showDialogBtn = document.querySelector("#showDialogBtn");
const confirmDialogBtn = document.querySelector("#confirmDialogBtn");
const title = document.querySelector("#title");
const author = document.querySelector("#author");
const pages = document.querySelector("#pages");
const status = document.querySelector("#status");

showDialogBtn.addEventListener("click", () => {
  dialog.showModal();
});

confirmDialogBtn.addEventListener("click", (e) => {
  e.preventDefault();
  addBookToLibrary(title.value, author.value, pages.value, status.value);
  dialog.close();
});
