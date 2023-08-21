// Classes for each object
export class Square {
  setColor(color) {
    this.backgroundColor = color;
  }
  render() {
    return `<rect x="70" y="20" width="160" height="160" fill="${this.backgroundColor}" />`;
  }
}

export class Circle {
  setColor(color) {
    this.backgroundColor = color;
  }
  render() {
    return `<circle cx="150" cy="100" r="90" fill="${this.backgroundColor}" />`;
  }
}

export class Triangle  {
  setColor(color) {
    this.backgroundColor = color;
  }
  render() {
    return `<polygon points="150, 18 244, 182 56, 182" fill="${this.backgroundColor}" />`;
  }
}


const components = {
    open:     `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">`,
    close:    `</svg>`,
    text:     `<text x="150" y="100" font-family="Verdana" font-size="32" dominant-baseline="middle" text-anchor="middle" fill="{color}">{text}</text>`,
    // Replaced with classes
    // square:   `<rect x="20" y="20" width="160" height="160" fill="{color}"/>`,
    // circle:   `<circle cx="100" cy="100" r="90" fill="{color}"/>`,
    // triangle: `<polygon points="100,20 180,140 20,140" fill="{color}"/>`,
}

// Generate the SVG code for the badge
export function generateBadge(answers) {
  const textNode = components.text.replace('{text}', answers.text).replace('{color}', answers.textColor);
  switch (answers.shape) {
    case 'square':
      var shapeNode = new Square();
      break;
    case 'circle':
      var shapeNode = new Circle();
      break;
    case 'triangle':
      var shapeNode = new Triangle();
      break;
  }
  shapeNode.setColor(answers.backgroundColor);
  return `${components.open}${shapeNode.render()}${textNode}${components.close}`;
}