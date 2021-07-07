import { TestBed } from '@angular/core/testing';

import { SelectedBooksService } from './selected-books.service';

describe('SelectedBooksService', () => {
  let service: SelectedBooksService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SelectedBooksService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
