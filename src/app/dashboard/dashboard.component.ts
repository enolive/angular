import {AfterViewInit, Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {Book} from '../shared/book';
import {BookComponent} from '../book/book.component';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/filter';
import {Subscription} from 'rxjs/Subscription';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit, AfterViewInit, OnDestroy {
    books: Book[];
    private subscription: Subscription;

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

        this.subscription = this.firstComponent.rated
            .filter(b => b.title === 'Angular')
            .map(b => b.title)
            .subscribe((title) => console.log(title));
    }

    ngOnDestroy(): void {
        if (this.subscription == null) {
            return;
        }

        this.subscription.unsubscribe();
    }

    reorderBooks(whichBook: Book) {
        this.books.sort((a, b) => b.rating - a.rating);
    }
}
