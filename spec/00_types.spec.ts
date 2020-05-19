xdescribe('types in typescript', () => {
    describe('declaring variables and constants', () => {
        it('implicit any', () => {
            let x;
            x = 'Tacos';
            expect(typeof x).toBe('string')

            x = 3.19;
            expect(typeof x).toBe('number');

            x = function () { }
            expect(typeof x).toBe('function');

            x = ['dog', 'cat', 'mouse', 99, 'tacos'];
            expect(typeof x).toBe('object');
        });
        it('implicit typing', () => {
            let name = 'tom';
            let age = 35;

            age = 50;
            name = '35';

            expect(typeof age).toBe('number');
        });
        it('implicit union', () => {
            const name = 'tom';
            let x: string | number = 40;
            let b = [];
            const g = '12';
            x = 'help';
            b = [g];
        });
        it('has const', () => {
            const x = 3.14;
            // x = 2;

            const numbers1 = [1, 9, 100];
            // numbers1 = [1, 2, 3]

            numbers1[0] = 9;

            const movie = { title: 'jaws', year: 1978 };
            // movie = { title: 'jaws', year: 1983 };
            movie.year = 1983;

        });
        it('has var', () => {
            const age = 22;
            // message;

            if (age > 21) {

                // tslint:disable-next-line: prefer-const
                // const message = 'Old enough';
            } else {
                // tslint:disable-next-line: no-var-keyword
                // const message = 'Too Young';
            }
            // expect(message).toBe('Old enough');
        });

        it('has interfaces', () => {

        });


        it('logging', () => {

            const story = `I was born
                then I died
                the end`;

            console.log(story);

        });
    });
});
