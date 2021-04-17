// Book Class : Represents a Book

class Book {
    constructor(title, author, summary){
        this.title = title;
        this.author = author;
        this.summary = summary;
    }
}

// UI CLass : Handle UI Tasks

class UI {
    static displayBooks() {
         const StoredBooks = [
             {
                 title: 'Book of Mining',
                 author: 'Remote Soul',
                 summary: 'Minecraft 101'
             }
         ];
         const books = StoredBooks;

         books.forEach((book)=> UI.addBookToList(book)); 
    }

    static addBookToList(book){
            const list = document.querySelector('#book-list');
            const row = document.createElement('tr');
            row.innerHTML = `
            <td>${book.title}</td>
            <td>${book.athor}</td>
            <td>${book.summary}</td>
            <td><a href="#" class="btn btn-danger btn-sm delete"></a></td>;`
            list.appendChild(row);
        }
}

// Store Class: Handles Storage (Local)

// Event: Display Books
document.addEventListener('DOMContentLoaded', UI.displayBooks);

// Event: Add a Book
document.querySelector('#book-form').addEventListener('submit', (e) => {
    //Prevent Actual submit 
    e.preventDefault();
    // Get form values
    const title = document.querySelector('#title').value;
    const author = document.querySelector('#author').value;
    const summary = document.querySelector('#summary').value;
    // Instantiate book
    const book = new Book(title, author, summary);
    console.log(book);
});

// Event: Remove a Book