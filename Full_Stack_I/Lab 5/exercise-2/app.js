const calculator = require('./calculator');
const comparer = require('./comparer');

const run = (a, b) => {
    if(comparer.AreNumberEqual(a, b)) {
        console.log('numbers are equal');
        console.log(calculator.Add(a, b));
    } else {
        console.log('numbers are not equal');
        console.log(calculator.Subtract(a, b));
    }
}

run(5, 10);
run(5, 5);