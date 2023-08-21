const inquirer = require('inquirer');
const stringToFile = require('./stringToFile');
const { validateHTMLColorName, validateHTMLColorHex } = require('validate-color');
const Shape = require('./shapes');

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
                message: 'Please enter the name of the color you would like to use for the text',
                when: (input) => input.shapeColorType === 'color name',
                validate: (input) => validateHTMLColorName(input) ? true : 'Please enter a valid color name.  Edit the entered text above'
            },
            {
                type: 'input',
                name: 'shapeColorHex',
                message: 'Please enter the hex code of the color you would like to use for the text',
                when: (input) => input.shapeColorType === 'hex',
                validate: (input) => validateHTMLColorHex(input) ? true : 'Please enter a valid color hex code.  Edit the entered text above'
            }
        ]
    }

    async run() {
        try {
            const answers = await inquirer.prompt(this.questions);
            console.log(answers);
            const directory = './examples';
            const file = answers.text + '.svg';  // TODO change this to be answers.text-logo.svg.
            
            // TODO remove shapeTest
            const shapeTest = new Shape(answers);
            console.log(shapeTest.renderText());
            
            // TODO switch to call correct shape class based on answers
            return stringToFile(directory, file, JSON.stringify(answers));
        } catch (err) {
            console.err(err);
        }

    }
}

module.exports = CLI;