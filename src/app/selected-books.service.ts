import { trimTrailingNulls } from '@angular/compiler/src/render3/view/util';
import { Injectable } from '@angular/core';
interface Book {
  id: string;
  title: string;
  author: string;
}
@Injectable({
  providedIn: 'root',
})
export class SelectedBooksService {
  books: Array<boolean | Book> = [];

  constructor() {
    this.books = [];
  }

  addBooks(newBook: any) {
    this.books.push(newBook);
  }

  showBooks(): boolean | Book {
    if (this.books.length > 0) return this.books;
    else return false;
  }
}
