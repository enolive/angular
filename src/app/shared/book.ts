export class Book {
    constructor(public isbn: string,
                public title: string,
                public description: string,
                public rating = 0) {
    }

    rateUp() {
        if (this.rating >= 5) {
            return;
        }

        this.rating++;
    }

    rateDown() {
        if (this.rating <= 0) {
            return;
        }

        this.rating--;
    }
}
