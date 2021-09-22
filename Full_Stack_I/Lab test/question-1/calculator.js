const multiplyTwoNumbers = (x, y) => {
    if(!(typeof(x) === 'number' && Number.isInteger(x)) ||
       !(typeof(y) === 'number' && Number.isInteger(y))) {
        throw new Error('Error: "x" or "y" is not an integer');
    }
    return x*y;
}

const evenDoubler = (x) => {
    if(!(typeof(x) === 'number' && Number.isInteger(x))) {
        throw new Error('Error: "x" is not an integer');
    }

    if(x % 2 == 0) {
        return x*x;
    } else {
        return 0;
    }
}

module.exports = {multiplyTwoNumbers, evenDoubler};