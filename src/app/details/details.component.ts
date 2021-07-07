import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.sass'],
})
export class DetailsComponent implements OnInit {
  books: Array<any>;
  bookId: Number = 0;
  selectedBook: any;
  constructor(private route: ActivatedRoute) {
    this.books = [
      { id: '1', title: 'Think and Growth Rich', author: 'Napoleon Hill' },
      { id: '2', title: 'Poor Dad, Rich Dad', author: 'Robert Kiyosaki' },
      { id: '3', title: 'Happy Money', author: 'Ken Honda' },
      { id: '4', title: 'The attractor Factor', author: 'Joe Vitale' },
      { id: '5', title: 'The Secret', author: 'Rhonda Byrne' },
    ];
  }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.bookId = params['id'];
      this.selectedBook = this.foundBook();
    });
  }

  filterById(book: any) {
    return book.id == this;
  }

  foundBook() {
    return this.books.filter(this.filterById, this.bookId)[0];
  }
}
