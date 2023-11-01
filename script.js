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

const harryPotter = new Book('Harry Potter', 'J. K. Rowling', '600', true);
const atomicHabits = new Book('Atomic Habbits', 'James Clear', '600', true);
const numberThree = new Book('Number Three', 'Third Spot', '3', false);

addBookToLibrary(harryPotter);
addBookToLibrary(atomicHabits);
addBookToLibrary(numberThree);

function makeBookCard () {
    myLibrary.forEach((book) => {
        console.log(book.title)
    })
};