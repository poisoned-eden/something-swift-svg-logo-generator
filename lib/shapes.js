// TODO: parent Shape class for code to be reused by child classes
class Shape {
    // TODO constructor with answers 
    constructor( answers ) {
        this.text = answers.text;
        this.textColor = answers.textColorName || answers.textColorHex;
    }

    // TODO render text tag markup

    // TODO render svg tag markup
}

module.exports = Shape;