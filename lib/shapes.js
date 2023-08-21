// TODO: parent Shape class for code to be reused by child classes
class Shape {
    // TODO constructor with answers 
    constructor( answers ) {
        this.text = answers.text;
        this.textColor = answers.textColorName || answers.textColorHex;
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

module.exports = Shape;