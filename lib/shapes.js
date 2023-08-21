// TODO: parent Shape class for code to be reused by child classes
class Shape {
    // TODO constructor with answers 
    constructor( answers ) {
        this.text = answers.text;
        this.textColor = answers.textColorName || answers.textColorHex;
    }

    // TODO render text tag markup
    renderText() {
        return `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>`;
    }

    // TODO render svg tag markup
}

module.exports = Shape;