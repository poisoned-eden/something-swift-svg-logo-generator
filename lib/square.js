const Shape = require('./shapes.js');

class Square extends Shape {
    constructor( answers ){
        super( answers );
    }
    
    renderShape() {
        return `<rect x="90" y="40" width="120" height="120" fill="${this.shapeColor}" />`;
    }
}

module.exports = Square;