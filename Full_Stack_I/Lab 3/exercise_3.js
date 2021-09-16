const colors = ['red', 'green', 'blue'];
const capitalizedColors = colors.map(element => element[0].toUpperCase() + element.slice(1).toLowerCase());

console.log(capitalizedColors);