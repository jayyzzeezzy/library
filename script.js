// Data Structure

class Book {
    constructor(title, author, pages, isRead) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.isRead = isRead;
    }
};

class Library {
    constructor() {
        this.myLibrary = [];
    }

    addBookToLibrary (book) {
        this.myLibrary.push(book);
    };

    removeBookInLibrary (book) {
        this.myLibrary.splice(`${library.myLibrary.indexOf(book)}`, 1);
    }
};

const library = new Library();

// dummy variables
const harryPotter = new Book('Harry Potter', 'J. K. Rowling', '600', true);
const atomicHabits = new Book('Atomic Habbits', 'James Clear', '600', true);
const lordOfTheRings = new Book('Lord of the Rings', 'John Ronald Reuel Tolkien', '1000', false);
library.addBookToLibrary(harryPotter);
library.addBookToLibrary(atomicHabits);
library.addBookToLibrary(lordOfTheRings);


// User Interface
const container = document.querySelector('#book-card-container');

// UI - buttons
const newBookBtn = document.querySelector('#newBookBtn');
const submitBookBtn = document.querySelector('#submitBookBtn');

newBookBtn.onclick = () => modal.showModal();

// constraint validation
submitBookBtn.addEventListener('click', checkInput);
const title = document.querySelector('#title');
const author = document.querySelector('#author');
const pages = document.querySelector('#pages');
function checkInput(event) {
    if (title.validity.valueMissing) {
        event.preventDefault();
        title.placeholder = "Please enter a title";
        title.classList.add("error");
    }
    else {
        title.placeholder = "e.g. Harry Potter";
        title.classList.remove("error");
    }
    
    if (author.validity.valueMissing) {
        event.preventDefault();
        author.placeholder = "Please enter author's name";
        author.classList.add("error");
    }
    else {
        author.placeholder = "e.g. J. K. Rowling";
        author.classList.remove("error");
    }

    if (pages.validity.valueMissing) {
        event.preventDefault();
        pages.placeholder = "Please enter page number";
        pages.classList.add("error");
    }
    else {
        pages.placeholder = "e.g. 1000";
        pages.classList.remove("error");
    }

};

// UI - modal
const form = document.querySelector('#enter-book-form');
const modal = document.querySelector('#modal');

form.addEventListener('submit', closeModal);

function closeModal(event) {
    addNewBook();
    event.preventDefault();
    checkInput(event);
    modal.close();
    clearCards();
    makeBookCards();
    form.reset();
};

// UI - logistics
function addNewBook() {
    const title = document.querySelector('#title').value;
    const author = document.querySelector('#author').value;
    const pages = document.querySelector('#pages').value;
    const isRead = document.querySelector('#is-read').checked;
    const newBook = new Book(title, author, pages, isRead);
    return library.addBookToLibrary(newBook);
};

function makeBookCards () {
    library.myLibrary.forEach((book) => {
        const bookCard = document.createElement('div');
        const title = document.createElement('h3');
        const author = document.createElement('p');
        const pages = document.createElement('p');
        const buttonGroup = document.createElement('div');
        const readBtn = document.createElement('button');
        const removeBtn = document.createElement('button');

        bookCard.classList.add('book-card');
        buttonGroup.classList.add('button-group');
        readBtn.classList.add('readBtn');
        removeBtn.classList.add('removeBtn');

        title.textContent = book.title;
        author.textContent = book.author;
        pages.textContent = `${book.pages} pages`;
        removeBtn.textContent = 'Remove';

        if (book.isRead) {
            readBtn.textContent = 'Read';
            readBtn.classList.add('green-btn');
        } 
        else {
            readBtn.textContent = 'Not read';
            readBtn.classList.add('red-btn');
        }

        readBtn.onclick = () => toggleRead(book);
        removeBtn.onclick = () => removeBook(book);

        bookCard.appendChild(title);
        bookCard.appendChild(author);
        bookCard.appendChild(pages);
        buttonGroup.appendChild(readBtn);
        buttonGroup.appendChild(removeBtn);
        bookCard.appendChild(buttonGroup);
        container.appendChild(bookCard);
    })
};

function toggleRead(book) {
    if (book.isRead) {
        book.isRead = false;
    }
    else {
        book.isRead = true;
    }
    clearCards();
    makeBookCards();
};

function removeBook(book) {
    library.removeBookInLibrary(book);
    clearCards();
    makeBookCards();
};

function clearCards() {
    container.textContent = '';
};

window.onload = () => {
    makeBookCards();
};
