function calculatePoints(wins, draws, losses) {
    return (3*wins + draws);
}

console.log(calculatePoints(3, 4, 2));
console.log(calculatePoints(5, 0, 2));
console.log(calculatePoints(0, 0, 1));