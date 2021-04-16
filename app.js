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

    }
}

// Store Class: Handles Storage (Local)

// Event: Display Books

// Event: Add a Book

// Event: Remove a Book