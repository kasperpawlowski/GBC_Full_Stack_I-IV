const difference = (number) => {
    const diff = Math.abs(number - 13);
    return (diff > 13 ? 2*diff : diff);
}

console.log(difference(32));
console.log(difference(11));