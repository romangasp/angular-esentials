import { Component, OnInit } from '@angular/core';
import { SelectedBooksService } from '../selected-books.service';
interface Book {
  id: string;
  title: string;
  author: string;
}

@Component({
  selector: 'app-list-books',
  templateUrl: './list-books.component.html',
  styleUrls: ['./list-books.component.scss'],
})
export class ListBooksComponent implements OnInit {
  books: Array<Book> = [];

  constructor(public selectedBooks: SelectedBooksService) {
    this.books = [
      { id: '1', title: 'Think and Growth Rich', author: 'Napoleon Hill' },
      { id: '2', title: 'Poor Dad, Rich Dad', author: 'Robert Kiyosaki' },
      { id: '3', title: 'Happy Money', author: 'Ken Honda' },
      { id: '4', title: 'The attractor Factor', author: 'Joe Vitale' },
      { id: '5', title: 'The Secret', author: 'Rhonda Byrne' },
    ];
  }

  ngOnInit(): void {}

  showAuthor(book: Book) {
    alert(`${book.title} this book was writed by its ${book.author}`);
  }

  addBooks(book: Book) {
    this.selectedBooks.addBooks(book);
  }
}
