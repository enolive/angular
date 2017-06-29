import {Component, OnInit} from '@angular/core';
import {Book} from '../shared/book';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css'],
})
export class BookComponent implements OnInit {

  book: Book;

  constructor() {
  }

  ngOnInit() {
  }

}
