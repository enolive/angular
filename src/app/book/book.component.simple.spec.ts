import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {BookComponent} from './book.component';
import {Book} from '../shared/book';

describe('BookComponent', () => {
    let component: BookComponent;

    beforeEach(() => component = new BookComponent());

    it('should pass rateUp to book', () => {
        const book = {
            rateUp: () => {
            },
        } as Book;
        component.book = book;
        spyOn(book, 'rateUp');

        component.rateUp();

        expect(book.rateUp).toHaveBeenCalled();
    });

    it('should pass rateDown to book', () => {
        const book = {
            rateDown: () => {
            },
        } as Book;
        component.book = book;
        spyOn(book, 'rateDown');

        component.rateDown();

        expect(book.rateDown).toHaveBeenCalled();
    });
});
