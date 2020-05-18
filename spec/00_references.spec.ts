describe('types in typescript', () => {
    describe('declaring variables and constants', () => {

        it('implicity any', () => {
            // No Typescript in this example.
            let x;

            x = 'Tacos';
            expect(typeof x).toBe('string');

            x = 3.19;

            expect(typeof x).toBe('number');
            x = function () { }
            expect(typeof x).toBe('function');

            x = ['dog', 'cat', 'mouse', 99, 'tacos'];
            expect(typeof x).toBe('object');
        });
        it('implicity typing', () => {
            const name = 'Jeff'; // initialized to a string AND the value 'Jeff'

            let age;
            age = 51;
            age = 'old';

            let x: string | number = 'Tacos'; // Union Type

            x = 3.19;


            let y: number | number[];

            y = 99;
            y = [123];
        });

        it('has const', () => {
            // const does not allow reassignment. That's it.

            const x = 3.14; // YOU MUST INIITALIZE IT

            const favoriteNumbers = [9, 20, 108];

            //    favoriteNumbers = [1,2,3];

            favoriteNumbers[0] = 10;

            expect(favoriteNumbers).toEqual([10, 20, 108]);

            const movie = { title: 'Jaws', yearReleased: 1978 };

            // movie = { title: 'ET', yearReleased: 1983};

            movie.yearReleased = 1977;

            interface Movie { title: string; yearReleased: number; director: string };
            interface Song { title: string; yearOfProduction: number; singer: string };
            let art: Movie | Song;

            art = {
                title: 'Jaws',
                yearReleased: 1977,
                director: 'Spielberg'
            };

            art = {
                title: 'Cassavetes',
                yearOfProduction: 1993,
                singer: 'Fugazi'
            };

        });

        it('has var but it is bad and you are a bad person if you use it.', () => {
            const age = 22;

            if (age > 21) {
                // tslint:disable-next-line: no-var-keyword
                var message = 'Old enough';
            } else {
                // tslint:disable-next-line: no-var-keyword
                var message = 'Too Young';
            }

            expect(message).toBe('Old enough');

            const title = 'King of Scotland';


        });
    });

    describe('literals in TypeScript', () => {

        it('has string literals', () => {
            const n1 = 'Bob';
            // tslint:disable-next-line: quotemark
            const n2 = "Bob";

            expect(n1).toEqual(n2);

            // tslint:disable-next-line: quotemark
            const someHtml = "<h1 class=\"pretty\">Hello</h1>";

        });
        it('has template strings', () => {

            const n1 = `Bob`;
            const n2 = `Bob`;
            expect(n1).toEqual(n2);

            const story = `Chapter 1
I was born at midnight in Akron.
It was all downhill from there.
the end`;
            console.log(story);

            // concatenating strings in JS/TS

            const name = 'Joe';
            const age = 51;
            const job = 'DEV';

            const description1 = 'The name is ' + name + ' and ' + name + ' is ' + age + ' and works as a ' + job;
            expect(description1).toBe('The name is Joe and Joe is 51 and works as a DEV');

            const description2 = `The name is ${name} and ${name} is ${age} and works as a ${job}`;
            expect(description2).toBe('The name is Joe and Joe is 51 and works as a DEV');


        });
    });

});