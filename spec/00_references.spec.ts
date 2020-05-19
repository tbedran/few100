xdescribe('types in typescript', () => {
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

        it('has various ways to express numeric literals', () => {
            let age: number;
            age = 51;

            const n2 = 1.2;
            const n3 = 0xff; // base 16 (hex)
            const n4 = 0b010101; // base 2 (binary)
            const n5 = 0o23; // base 8
            const bigNumber = 1_000_382;

            expect(bigNumber).toBe(1000382);
            expect(bigNumber).toEqual(1000382);


        });

        describe('arrays and aray literals', () => {
            it('has two ways to declare an array', () => {
                let stuff: (number | string)[];
                stuff = ['dag', 'cat', 99];

                expect(stuff[0]).toBe('dag');

            });

            it('has array destructuring ad a rest operator', () => {
                const friends = ['tom', 'doug', 'nancy'];

                const friend1 = friends[0];
                expect(friend1).toBe('tom');

                const [friend2, , friend3] = friends;
                expect(friend2).toBe('tom');
                expect(friend3).toBe('nancy');

                const [first, ...alltheothers] = friends;

                // the rest operator
                expect(first).toBe('tom');
                expect(alltheothers).toEqual(['doug', 'nancy']);


                // the spread operator
                const newfriends = ['bill', ...friends, 'joe'];
                expect(newfriends).toEqual(['bill', 'tom', 'doug', 'nancy', 'joe']);


                function addThemAll(...numbers: number[]) {
                    return numbers.reduce((s, n) => s + n);
                }
                expect(addThemAll(1)).toBe(1);
                expect(addThemAll(2, 2)).toBe(4);
                expect(addThemAll(1, 2, 3, 4, 5, 6, 7, 8, 9)).toBe(45);


            });

            it('tuples', () => {
                // typed arrays
                const stuff: [string, number, string] = ['Cat', 13, 'Dog'];

                const first = stuff[0];
                const second = stuff[1];

                type QuoteMarkRule = [boolean, 'single' | 'double'];
                const myQuoteRule: QuoteMarkRule = [true, 'double'];

                if (myQuoteRule[0]) {
                    console.log(`You are enforcing quote marks and using ${myQuoteRule[1]} quotes`);
                }
            });

        });
        describe('a practical example of what you might use a tuple for (but probably would not)', () => {
            it('an oop approach', () => {
                // string FormatName(string first, string last)
                interface FormattedName { formattedName: string; numberOfLettersInName: number; }
                function formatName(first: string, last: string): FormattedName {
                    const formattedName = `${last}, ${first}`
                    return {
                        formattedName,
                        numberOfLettersInName: formattedName.length
                    }
                }
                function formatNameCasually(first: string, last: string): FormattedName {
                    const formattedName = `${first} ${last}`;
                    return {
                        formattedName,
                        numberOfLettersInName: formattedName.length
                    }
                }
                const result = formatName('Han', 'Solo');
                expect(result.formattedName).toBe('Solo, Han');
                expect(result.numberOfLettersInName).toBe(9);
                // const result2 = formatNameCasually('Luke', 'Skywalker');
                // expect(result2.formattedName).toBe('Luke Skywalker');
                const { formattedName: n } = formatNameCasually('Luke', 'Skywalker');
                expect(n).toBe('Luke Skywalker');
            });
            it('if that wasn\'t confusing enough, here is tuples', () => {
                function formatName(first: string, last: string): [string, number] {
                    const formattedName = `${last}, ${first}`;
                    return [formattedName, formattedName.length]
                }
                const results = formatName('Han', 'Solo');
                expect(results[0]).toBe('Solo, Han');
                expect(results[1]).toBe(9);

            });
            it('define a tuple', () => {
                const anArray: (string | number)[] = ['cat', 'dog', 99, 138, 'pizza'];
                const aTuple: [string, string, number, string[]] = ['cat', 'cat', 99, ['bird', 'mouse']];
            });

            it('destructuring an object', () => {
                const movie = { title: 'A New Hope', director: 'Lucas', yearReleased: 1977 };

                // Old Skool
                const t1 = movie.title;
                const y1 = movie.yearReleased;
                expect(t1).toBe('A New Hope');
                expect(y1).toBe(1977);

                // new Skool
                const { title: t2, yearReleased: y2 } = movie;
                expect(t2).toBe('A New Hope');
                expect(y2).toBe(1977);

                const { title, yearReleased } = movie;
                expect(title).toBe('A New Hope');
                expect(yearReleased).toBe(1977);
            });

            it('has ananymous types', () => {

                const thor: any = {
                    title: 'Thor: Ragnarok',
                    director: 'Taika Waititi',
                    yearReleased: 2017
                };
                thor.title = 'Thor Ragnorok';
                expect(thor.title).toBe('Thor Ragnorok');
                // tslint:disable-next-line: no-string-literal
                expect(thor['title']).toBe('Thor Ragnorok');
                thor.yearreleased = 2017;
                thor.nicehair = true;

            });

            it('you can make extensible objects', () => {
                interface Book {
                    title: string;
                    author: { firstName: string, lastName: string };
                    numberOfPages: number;
                    publisher?: string;
                }
                const highWeirdness: Book = {
                    title: 'High Weirdness',
                    author: {
                        firstName: 'Erik',
                        lastName: 'Davis'
                    },
                    numberOfPages: 545
                };
                expect(highWeirdness.author.lastName).toBe('Davis');
                const theBrokeHorses: Book = {
                    title: 'The Broke Horses',
                    author: { firstName: 'Jannette', lastName: 'Walls' },
                    numberOfPages: 265,
                    publisher: 'Penguin'
                }
                function doSomethingWithABook(book: Book): string {
                    let result = `Book ${book.title} by ${book.author.lastName} has ${book.numberOfPages}`;
                    if (book.publisher) {
                        result += ` and was published by ${book.publisher}`;
                    }
                    return result;
                }
            });
            it('what', () => {
                interface AtLeastHasAMessage {
                    message: string;
                    [key: string]: any; // can have any other properties.
                }
                const phoneCall: AtLeastHasAMessage = {
                    message: 'Call your mom',
                    from: 'Your Mom',
                    time: 'Noon',
                    number: '999-999-9999'
                }
                // expect(phoneCall['number']).toBe('999-999-9999');
                // 'Dictionary'
                // Dictionary<string, int> bowlingScores;
                // bowlingScores['craig'] = 127;
                // bowlingScores['joe'] = 288;
                interface BowlingScores {
                    [key: string]: number;
                }
                interface Dictionary<T> {
                    [key: string]: T
                }
                const scores: Dictionary<number> = {
                    craig: 127,
                    joe: 288,
                    'mary ann': 300
                }
                expect(scores.craig).toBe(127);
                expect(scores['mary ann']).toBe(300);
                scores['jimmy jo bob'] = 145;
                const nickNames: Dictionary<string> = {
                    bill: 'Billarama!',
                    kevin: 'kev'
                }
                expect(nickNames.kevin).toBe('kev');
            });
        });

        it('has duck typing (aka structural typing)', () => {
            interface MessageHaver { message: string }
            function logMessage(item: MessageHaver) {
                console.log(`At ${new Date().toLocaleTimeString()} you got the message ${item.message}`);
            }
            logMessage({ message: 'Call your mom' });
            const phoneCall = {
                from: 'Jenny',
                number: '867-5309',
                message: 'For a good time...'
            };
            logMessage(phoneCall);
        });
        it('type types', () => {
            expect(subtract(2, 2)).toBe(0);
            // Anonymous Functions
            const add = (a: number, b: number) => a + b; // C# Lambda, in JS/TS "Arrow Functions"
            const multiply = function (a: number, b: number): number { // old skool anonymous function
                return a * b;
            }
            // Named Functions
            function subtract(a: number, b: number): number {
                return a - b;
            }
            expect(add(2, 2)).toBe(4);
            expect(multiply(2, 3)).toBe(6);
        });
        it('a bit more about arrow functions', () => {
            // an arrow function that takes no arguments:
            const doIt = () => console.log('Doing it.');
            doIt();
            // an arrow function that has to do more than one thing.
            const logIt = (thing: { message: string }) => {
                console.log('Fixing to run yer function');
                console.log(`Here's the message ${thing.message}`);
                return true; // when you have a block, you have to use the 'return' keyword to return something.
            }
            // an arrow function that just returns the result of an expression
            const changeIt = (what: string) => what.toUpperCase().trim();
            expect(changeIt(' hello    ')).toBe('HELLO');
        });
        it('a function that takes a function', () => {
            type MathOp = (a: number, b: number) => number;
            const addition: MathOp = (a, b) => a + b;
            const subtraction: MathOp = (a, b) => a - b;
            const multiplication: MathOp = (a, b) => a * b;
            function doubleAndApply(n1: number, n2: number, op: MathOp) {
                n1 *= 2;
                n2 *= 2;
                return op(n1, n2);
            }
            expect(doubleAndApply(2, 2, addition)).toBe(8);
            expect(doubleAndApply(3, 3, multiplication)).toBe(36);
            expect(doubleAndApply(2, 2, (a, b) => a / b)).toBe(1);
            const logIt = (message: string, decorator: (x: string) => string): void => {
                console.log(decorator(message));
            }
            logIt('hello', (y) => `***${y}***`);
            logIt('boring', y => y); // identity
        });
        it('just using an old skool function like a non-crazy person', () => {
            function makeElement(tag: string, content: string): string {
                return `<${tag}>${content}</${tag}>`;
            }
            expect(makeElement('h1', 'Tacos')).toBe('<h1>Tacos</h1>');
            expect(makeElement('h1', 'Beer')).toBe('<h1>Beer</h1>');
            expect(makeElement('p', 'body')).toBe('<p>body</p>');
        });
        it('an oop person would make a class!', () => {
            class TagMaker {
                constructor(private tag: string) { }
                make(content: string) {
                    return `<${this.tag}>${content}</${this.tag}>`
                }
            }
            const h1Maker = new TagMaker('h1');
            const pMaker = new TagMaker('p');
            expect(h1Maker.make('Tacos')).toBe('<h1>Tacos</h1>');
            expect(h1Maker.make('Beer')).toBe('<h1>Beer</h1>');
            expect(pMaker.make('body')).toBe('<p>body</p>');
        });
        it('how a functional programmer would do it.', () => {
            function tagMaker(tag: string): (content: string) => string {
                return (content) => `<${tag}>${content}</${tag}>`
            }
            const h1Maker = tagMaker('h1');
            const pMaker = tagMaker('p');
            expect(h1Maker('Tacos')).toBe('<h1>Tacos</h1>');
            expect(h1Maker('Beer')).toBe('<h1>Beer</h1>');
            expect(pMaker('body')).toBe('<p>body</p>');
        });


    });



    describe('array numbers', () => {

        const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];


        it('visit each element', () => {

            numbers.forEach((val, indx, coll) => console.log({ val, indx, coll }));

        });


    });


});