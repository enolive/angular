import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {BookComponent} from './book.component';
import {Book} from '../shared/book';

describe('BookComponent', () => {
    let component: BookComponent;

    beforeEach(() => component = new BookComponent());

    function aBook() {
        const book = {
            rateUp: () => {
            },
            rateDown: () => {
            },
        } as Book;
        return book;
    }

    it('should pass rateUp to book', () => {
        const spy = aBook();
        component.book = spy;
        spyOn(spy, 'rateUp');

        component.rateUp();

        expect(spy.rateUp).toHaveBeenCalled();
    });

    it('should pass rateDown to book', () => {
        const spy = aBook();
        component.book = spy;
        spyOn(spy, 'rateDown');

        component.rateDown();

        expect(spy.rateDown).toHaveBeenCalled();
    });
});
