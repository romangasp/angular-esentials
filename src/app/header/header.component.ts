import { Component, OnInit } from '@angular/core';
import { SelectedBooksService } from '../selected-books.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  showList: boolean = false;
  selectedBooksHeader: boolean | Object = [];
  constructor(selectedBooks: SelectedBooksService) {
    this.selectedBooksHeader = selectedBooks.showBooks();
  }

  ngOnInit(): void {}
}
