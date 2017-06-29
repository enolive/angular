import {Component, OnInit} from '@angular/core';
import {Book} from '../shared/book';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {

  books: Book[];

  constructor() {
  }

  ngOnInit() {
    this.books = [
      new Book('12345678', 'Angular', 'Angular rocks! <3', 4),
      new Book('43323325', 'AngularJS 1.x', 'Oldie but goldie', 2),
      new Book('16663211', 'Clean Code', 'The Bible!!!', 5),
    ];

  }

}
