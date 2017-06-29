import {Component, OnInit} from '@angular/core';
import {Book} from '../shared/book';
import {ActivatedRoute} from '@angular/router';

@Component({
    selector: 'app-book-details',
    templateUrl: './book-details.component.html',
    styleUrls: ['./book-details.component.css'],
})
export class BookDetailsComponent implements OnInit {

    book: Book = new Book('', 'Not Found', '');
    isbn: string;

    constructor(private route: ActivatedRoute) {
    }

    ngOnInit() {
        this.route.params.subscribe(params => {
            this.isbn = params.isbn;
        });
    }
}
