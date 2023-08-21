
const components = {
    open:     `<svg version="1.1" width="200" height="200" xmlns="http://www.w3.org/2000/svg">`,
    close:    `</svg>`,
    square:   `<rect x="20" y="20" width="160" height="160" fill="{color}"/>`,
    circle:   `<circle cx="100" cy="100" r="90" fill="{color}"/>`,
    triangle: `<polygon points="100,20 180,140 20,140" fill="{color}"/>`,
    text:     `<text x="100" y="100" font-family="Verdana" font-size="32" dominant-baseline="middle" text-anchor="middle" fill="{color}">{text}</text>`,
}

export function generateBadge(answers) {
  const textNode = components.text.replace('{text}', answers.text).replace('{color}', answers.textColor);
  const shapeNode = components[answers.shape].replace('{color}', answers.backgroundColor);
  return `${components.open}${shapeNode}${textNode}${components.close}`;
}