const inquirer = require('inquirer');
const stringToFile = require('./stringToFile');

// TODO: class CLI for interface functionality
class CLI {
    constructor() {
        this.questions = [
            {
                type: 'input',
                name: 'text',
                message: 'What text would you like to display on the logo? You can enter up to three characters.',
                validate: function (input) {
                    // TODO validation function
                    console.log(input);
                    return true;
                }
            },
            {
                type: 'input',
                name: 'textColor',
                message: 'What color would you like the text? Please enter a color keyword or a hexadecimal number including the #',
                validate: (input) => this.validateColor(input)
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
                type: 'input',
                name: 'shapeColor',
                message: 'What color would you like the shape? Please enter a color keyword or a hexadecimal number including the #',
                validate: (input) => this.validateColor(input)
            },
        ]
    }

    validateColor(input) {
        // TODO: validateColor return true if OK, string if not
        console.log(input);
        return true;
    }

    async run() {
        try {
            const answers = await inquirer.prompt(this.questions);
            console.log(answers);
            const directory = './examples';
            const file = answers.text + '.svg';
            return stringToFile(directory, file, JSON.stringify(answers));
        } catch (err) {
            console.err(err);
        }

    }
}

module.exports = CLI;