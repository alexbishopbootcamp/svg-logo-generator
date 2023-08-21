import {Triangle} from '../utils/svg.js';
import {Circle} from '../utils/svg.js';
import {Square} from '../utils/svg.js';
import {generateBadge} from '../utils/svg.js';



test('Test creating a Triangle object and setting its color', () => {
  const shape = new Triangle();
  shape.setColor("blue");
  expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
});

test('Test creating a Circle object and setting its color', () => {
  const shape = new Circle();
  shape.setColor("blue");
  expect(shape.render()).toEqual('<circle cx="150" cy="100" r="90" fill="blue" />');
});

test('Test creating a Square object and setting its color', () => {
  const shape = new Square();
  shape.setColor("blue");
  expect(shape.render()).toEqual('<rect x="70" y="20" width="160" height="160" fill="blue" />');
});

test('Test rendering a full badge', () => {
  const answers = {
    text: 'ABC',
    textColor: 'blue',
    backgroundColor: 'red',
    shape: 'circle'
  };
  expect(generateBadge(answers)).toEqual('<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><circle cx="150" cy="100" r="90" fill="red" /><text x="150" y="100" font-family="Verdana" font-size="32" dominant-baseline="middle" text-anchor="middle" fill="blue">ABC</text></svg>');
});