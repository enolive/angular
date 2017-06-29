import {Component, EventEmitter, Input, Output, ViewChild} from '@angular/core';
import {Book} from '../shared/book';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css'],
})
export class BookComponent  {

  @Input() book: Book;

  @Output() rated = new EventEmitter<Book>();

  rateUp() {
      this.book.rateUp();
      this.rated.emit(this.book);
  }

  rateDown() {
      this.book.rateDown();
      this.rated.emit(this.book);
  }
}
