import {Book} from './book';

describe('Book', () => {
    let book: Book;

    beforeEach(() => book = new Book('', '', ''))

    it('should rate up a book', () => {
        book.rating = 0;
        book.rateUp();
        book.rateUp();
        expect(book.rating).toBe(2);
    });

    it('should rate down a book', () => {
        book.rating = 5;
        book.rateDown();
        book.rateDown();
        expect(book.rating).toBe(3);
    });

    it('should have a maximal rating of 5', () => {
       book.rating = 5;
       book.rateUp();
       expect(book.rating).toBe(5);
    });

    it('should have a minimal rating of 0', () => {
       book.rating = 0;
       book.rateDown();
       expect(book.rating).toBe(0);
    });
});
