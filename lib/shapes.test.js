const { Circle, Square, Triangle } = require('./shapes');

// TODO: Each shape class should be tested for a render() method that returns a string for the corresponding SVG file with the given shape color.
describe('Circle', () => {
    describe('blue', () => {
        it('should return a string containing svg circle tag with fill blue', () => {
            const answers = {
                shapeColorName: 'blue'
            };

            const shape = new Circle(answers);
            expect(shape.renderShape()).toEqual('<circle cx="150" cy="100" r="80" fill="blue" />');
        });
    });
    describe('LMF', () => {
        it('should return a string containing svg text tag with content LMF and color blue', () => {
            const answers = {
                text: 'LMF',
                textColorName: 'blue'
            };

            const shape = new Circle(answers);
            expect(shape.renderText()).toEqual('<text x="150" y="125" font-size="60" text-anchor="middle" fill="blue">LMF</text>');
        });
    });
    describe('svg', () => {
        it('should return full svg string', () => {
            const answers = {
                text: 'LMF',
                textColorName: 'blue',
                shapeColorName: 'blue'
            };
            const shape = new Circle(answers);
            expect(shape.renderSVG()).toEqual(`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
            <circle cx="150" cy="100" r="80" fill="blue" />
            <text x="150" y="125" font-size="60" text-anchor="middle" fill="blue">LMF</text>
        </svg>`);
        })
    })
});

describe('Square', () => {
    describe('red', () => {
        it('should return a string containing svg rect tag with fill red', () => {
            const answers = {
                shapeColorName: 'red'
            };

            const shape = new Square(answers);
            expect(shape.renderShape()).toEqual('<rect x="90" y="40" width="120" height="120" fill="red" />');
        });
    });

    describe('LMF', () => {
        it('should return a string containing svg text tag with content LMF and color blue', () => {
            const answers = {
                text: 'LMF',
                textColorName: 'blue'
            };

            const shape = new Circle(answers);
            expect(shape.renderText()).toEqual('<text x="150" y="125" font-size="60" text-anchor="middle" fill="blue">LMF</text>');
        });
    });

    describe('svg', () => {
        it('should return full svg string', () => {
            const answers = {
                text: 'LMF',
                textColorName: 'blue',
                shapeColorName: 'blue'
            };
            const shape = new Square(answers);
            expect(shape.renderSVG()).toEqual(`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
            <rect x="90" y="40" width="120" height="120" fill="blue" />
            <text x="150" y="125" font-size="60" text-anchor="middle" fill="blue">LMF</text>
        </svg>`);
        })
    })
});

describe('Triangle', () => {
    describe('blue', () => {
        it('should return a string containing svg polygon tag that describes a triangle with fill blue', () => {
            const answers = {
                shapeColorName: 'blue'
            };

            const shape = new Triangle(answers);
            expect(shape.renderShape()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
        });
    });

    describe('LMF', () => {
        it('should return a string containing svg text tag with content LMF and color blue', () => {
            const answers = {
                text: 'LMF',
                textColorName: 'blue'
            };

            const shape = new Circle(answers);
            expect(shape.renderText()).toEqual('<text x="150" y="125" font-size="60" text-anchor="middle" fill="blue">LMF</text>');
        });
    });

    describe('svg', () => {
        it('should return full svg string', () => {
            const answers = {
                text: 'LMF',
                textColorName: 'blue',
                shapeColorName: 'blue'
            };
            const shape = new Triangle(answers);
            expect(shape.renderSVG()).toEqual(`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
            <polygon points="150, 18 244, 182 56, 182" fill="blue" />
            <text x="150" y="125" font-size="60" text-anchor="middle" fill="blue">LMF</text>
        </svg>`);
        })
    })
});
