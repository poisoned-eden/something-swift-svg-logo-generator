// TODO: parent Shape class for code to be reused by child classes
class Shape {
    // TODO constructor with answers 
    constructor( answers ) {
        this.text = answers.text;
        this.textColor = answers.textColorName || answers.textColorHex;
    }

    // TODO render shape tag markup

    renderText() {
        return `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>`;
    }

    // TODO render svg tag markup
    renderSVG() {
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
            ${this.renderShape}
            ${this.renderText}
        </svg>`
    }
}

module.exports = Shape;