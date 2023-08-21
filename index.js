// Imports
import inquirer from 'inquirer';
import autocomplete from 'inquirer-autocomplete-prompt';
import fs from 'fs';
import {generateBadge} from './utils/svg.js';
import colornames from 'colornames';

// Get all indexed color names
const colorsNames = colornames.all();

inquirer.registerPrompt('autocomplete', autocomplete);

function pickColor(answersSoFar, input) {
    if (!input) {
      // Return all valid CSS colors
      return colorsNames.filter(color => color.css && isNaN(color.name.slice(-1) ));
    }
    // if input is a valid hex code, return it
    if (/^#?([a-f0-9]{6})$/i.test(input)) {
      // Insert a # at the beginning if it's missing
      if (input[0] !== '#') {
        input = '#' + input;
      }
      return [input.toUpperCase()];
    }
    // Return all color names that start with the input and are valid CSS colors
    return colorsNames.filter(color => color.css && isNaN(color.name.slice(-1)) && color.name.toLowerCase().startsWith(input.toLowerCase()) );
}

const questions = [
  {
    type: 'input',
    name: 'text', 
    message: 'Enter up to 3 characters to be displayed on the badge:',
    validate: function (value) {
        const valid = value.length <= 3;
        return valid || 'Please enter up to 3 characters';
    },
  },
  {
    type: 'autocomplete',
    name: 'textColor',
    message: 'Enter the color name or hex code for the text:',
    source: pickColor,
  },
  {
    type: 'autocomplete',
    name: 'backgroundColor',
    message: 'Enter the color name or hex code for the background:',
    source: pickColor,
  },
  {
    type: 'list',
    name: 'shape',
    message: 'Choose the shape of the badge:',
    choices: ['circle', 'triangle', 'square'],
  }
];

// Ask for user input and write to file
inquirer.prompt(questions).then(answers => {
  const svgCode = generateBadge(answers);
  fs.writeFileSync('out.svg', svgCode);
  console.log("Wrote SVG file to out.svg")
});