import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {BookComponent} from './book.component';
import {Book} from '../shared/book';

describe('BookComponent', () => {
    let component: BookComponent;

    beforeEach(() => component = new BookComponent());

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

    it('should emit rated event on rateUp', () => {
        let called = 0;
        component.book = aBook();
        component.rated.subscribe(() => {
            called++;
        });

        component.rateUp();
        component.rateDown();
        expect(called).toBe(2);
    });

    function aBook() {
        const book = {
            rateUp: () => {
            },
            rateDown: () => {
            },
        } as Book;
        return book;
    }
});
