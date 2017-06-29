import {AfterViewInit, Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {Book} from '../shared/book';
import {BookComponent} from '../book/book.component';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit, AfterViewInit, OnDestroy {
    books: Book[];

    constructor() {
    }

    @ViewChild(BookComponent)
    firstComponent: BookComponent;

    ngOnInit() {
        this.books = [
            new Book('12345678', 'Angular', 'Angular rocks! <3', 4),
            new Book('43323325', 'AngularJS 1.x', 'Oldie but goldie', 2),
            new Book('16663211', 'Clean Code', 'The Bible!!!', 5),
        ];
    }

    ngAfterViewInit(): void {
        if (this.firstComponent == null) {
            return;
        }

        this.firstComponent.rated.subscribe(
            (book: Book) => console.log(book.title));
    }

    ngOnDestroy(): void {
        if (this.firstComponent == null) {
            return;
        }

        this.firstComponent.rated.unsubscribe();
    }

    reorderBooks(whichBook: Book) {
        console.log(whichBook.title);
        this.books.sort((a, b) => b.rating - a.rating);
    }
}
