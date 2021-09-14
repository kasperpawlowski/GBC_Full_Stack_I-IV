var array = [1, 2, 3, 4];
const calculateSum = array.reduce((sum, element) => sum + element, 0);
const calculateProduct = array.reduce((product, element) => product * element, 1);

console.log(calculateSum);
console.log(calculateProduct);