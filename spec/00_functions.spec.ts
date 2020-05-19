describe('array methods', () => {
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

    it('to visit each element of an array', () => {
        numbers.forEach((val, indx, coll) => console.log({ val, indx, coll }));
    });

    describe('array methods that return a new array', () => {
        it('can return only methods that pass a predicate', () => {
            const isEven = (n: number): boolean => n % 2 === 0;
            const evens = numbers.filter(isEven); // Where
            expect(evens).toEqual([2, 4, 6, 8]);
        });
        it('convert each item in the array to something new', () => {

            // const doubled = numbers.map(n => n * 2); // in Linq Select

            // expect(doubled).toBe([2, 4, 6, 8, 10, 12, 14, 16, 18]);

        });
    });
});