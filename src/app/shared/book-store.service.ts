import {Injectable} from '@angular/core';
import {Book} from './book';

@Injectable()
export class BookStoreService {
    private books: Book[];

    constructor() {
        this.books = [
            new Book('12345678', 'Angular', 'Angular rocks! <3', 4),
            new Book('43323325', 'AngularJS 1.x', 'Oldie but goldie', 2),
            new Book('16663211', 'Clean Code', 'The Bible!!!', 5),
        ];
    }

    getAll() {
        return this.books;
    }
}
