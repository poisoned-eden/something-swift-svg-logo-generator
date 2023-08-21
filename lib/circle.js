const Shape = require('./shapes.js');

class Circle extends Shape {
    constructor( answers ){
        super( answers );
    }
    
    renderShape() {
        return `<circle cx="150" cy="100" r="80" fill="${this.shapeColor}" />`
    }
}

module.exports = Circle;