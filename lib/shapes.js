class Shape {
    constructor( answers ) {
        this.text = answers.text;
        this.textColor = answers.textColorName || answers.textColorHex;
        this.shapeColor =  answers.shapeColorName || answers.shapeColorHex;
    }

    renderShape() {
        const methodWarning = 'THIS METHOD MUST BE CALLED ON A CHILD CLASS WITH ITS OWN METHOD DECLARATION';
        console.log(methodWarning);
        return methodWarning;
    }

    renderText() {
        return `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>`;
    }

    renderSVG() {
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
            ${this.renderShape()}
            ${this.renderText()}
        </svg>`
    }
}

class Circle extends Shape {
    constructor( answers ) {
        super( answers );
    }
    
    renderShape() {
        return `<circle cx="150" cy="100" r="80" fill="${this.shapeColor}" />`
    }
}

class Square extends Shape {
    constructor( answers ) {
        super( answers );
    }
    
    renderShape() {
        return `<rect x="90" y="40" width="120" height="120" fill="${this.shapeColor}" />`;
    }
}

class Triangle extends Shape {
    constructor( answers ) {
        super( answers );
    }
    
    renderShape() {
        return `<polygon points="150, 18 244, 182 56, 182" fill="${this.shapeColor}" />`;
    }
}

module.exports = Circle, Square, Triangle;