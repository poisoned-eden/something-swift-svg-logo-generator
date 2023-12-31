const inquirer = require('inquirer');
const stringToFile = require('./stringToFile');
const { validateHTMLColorName, validateHTMLColorHex } = require('validate-color');
const { Circle, Square, Triangle } = require('./shapes');

class CLI {
    constructor() {
        this.questions = [
            {
                type: 'input',
                name: 'text',
                message: 'What text would you like to display on the logo? You can enter up to three characters.',
                validate: function (input) {
                    if (/^\w{1,3}$/.test(input)) {
                        return true
                    } else {
                        return 'Please edit your input to be 1-3 characters'
                    };
                }
            },
            {
                type: 'list',
                name: 'textColorType',
                message: 'Which type of color specification would you like to use?',
                choices: [
                    'color name',
                    'hex'
                ]
            },
            {
                type: 'input',
                name: 'textColorName',
                message: 'Please enter the name of the color you would like to use for the text',
                when: (input) => input.textColorType === 'color name',
                validate: (input) => validateHTMLColorName(input) ? true : 'Please enter a valid color name.  Edit the entered text above'
            },
            {
                type: 'input',
                name: 'textColorHex',
                message: 'Please enter the hex code of the color you would like to use for the text',
                when: (input) => input.textColorType === 'hex',
                validate: (input) => validateHTMLColorHex(input) ? true : 'Please enter a valid color hex code.  Edit the entered text above'
            },
            {
                type: 'list',
                name: 'shape',
                message: 'Which shape would you like?',
                choices: [
                    'circle',
                    'triangle',
                    'square'
                ]
            },
            {
                type: 'list',
                name: 'shapeColorType',
                message: 'Which type of color specification would you like to use?',
                choices: [
                    'color name',
                    'hex'
                ]
            },
            {
                type: 'input',
                name: 'shapeColorName',
                message: 'Please enter the name of the color you would like to use for the shape',
                when: (input) => input.shapeColorType === 'color name',
                validate: (input) => validateHTMLColorName(input) ? true : 'Please enter a valid color name.  Edit the entered text above'
            },
            {
                type: 'input',
                name: 'shapeColorHex',
                message: 'Please enter the hex code of the color you would like to use for the shape',
                when: (input) => input.shapeColorType === 'hex',
                validate: (input) => validateHTMLColorHex(input) ? true : 'Please enter a valid color hex code.  Edit the entered text above'
            }
        ]
    }

    async run() {
        try {
            const answers = await inquirer.prompt(this.questions);
            const directory = './examples';
            const file = answers.text + '-logo.svg';

            switch (answers.shape) {
                case 'circle':
                    const circle = new Circle(answers);
                    return stringToFile(directory, file, circle.renderSVG());
                    break;
                case 'square':
                    const square = new Square(answers);
                    return stringToFile(directory, file, square.renderSVG());
                    break;
                case 'triangle':
                    const triangle = new Triangle(answers);
                    return stringToFile(directory, file, triangle.renderSVG());
                    break;
                default:
                    break;
            }
        } catch (err) {
            console.log(err);
        }

    }
}

module.exports = CLI;