import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'App Works!';

  books: Array<any>;

  constructor() {
    this.books = [
      { id: '1', title: 'Think and Growth Rich', author: 'Napoleon Hill' },
      { id: '2', title: 'Poor Dad, Rich Dad', author: 'Robert Kiyosaki' },
      { id: '3', title: 'Happy Money', author: 'Ken Honda' },
      { id: '4', title: 'The attractor Factor', author: 'Joe Vitale' },
      { id: '5', title: 'The Secret', author: 'Rhonda Byrne' },
    ];
  }

  showAuthor(book: any) {
    alert(`${book.title} this book was writed by its ${book.author}`);
  }
}
