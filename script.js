// Data Structure

const myLibrary = [];

let isRead = false;

function Book(title, author, pages, isRead) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead;
};

function addBookToLibrary (book) {
    myLibrary.push(book);
};

// dummy variables
const harryPotter = new Book('Harry Potter', 'J. K. Rowling', '600', true);
const atomicHabits = new Book('Atomic Habbits', 'James Clear', '600', true);
const numberThree = new Book('Number Three', 'Third Spot', '3', false);
addBookToLibrary(harryPotter);
addBookToLibrary(atomicHabits);
addBookToLibrary(numberThree);

// User Interface

const container = document.querySelector('#book-card-container');

// UI buttons
const newBookBtn = document.querySelector('#newBookBtn');
const submitBookBtn = document.querySelector('#submitBookBtn');

newBookBtn.onclick = () => modal.showModal();

// UI modal
const form = document.querySelector('#enter-book-form');
const modal = document.querySelector('#modal');

form.addEventListener('submit', closeModal);

function closeModal(event) {
    addNewBook();
    event.preventDefault();
    modal.close();
    clearCards();
    makeBookCards();
};

// UI logistics
function addNewBook() {
    const title = document.querySelector('#title').value;
    const author = document.querySelector('#author').value;
    const pages = document.querySelector('#pages').value;
    const isRead = document.querySelector('#is-read').checked;
    const newBook = new Book(title, author, pages, isRead);
    return addBookToLibrary(newBook);
};

function makeBookCards () {
    myLibrary.forEach((book) => {
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
        } 
        else {
            readBtn.textContent = 'Not read';
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

        console.log(book.title)
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
    myLibrary.splice(`${myLibrary.indexOf(book)}`, 1);
    clearCards();
    makeBookCards();
};

function clearCards() {
    container.textContent = '';
};

window.onload = () => {
    makeBookCards();
};