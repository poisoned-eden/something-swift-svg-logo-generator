const Shape = require('./shapes.js');

class Triangle extends Shape {
    constructor( answers ){
        super( answers );
    }
    
    renderShape() {
        return `<polygon points="150, 18 244, 182 56, 182" fill="${this.shapeColor}" />`;
    }
}

module.exports = Triangle;