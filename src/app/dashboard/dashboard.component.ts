import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {

  books: string[];

  constructor() {
  }

  ngOnInit() {
    this.books = ['Angular', 'Angular JS 1.x', 'Clean Code']
  }

}
