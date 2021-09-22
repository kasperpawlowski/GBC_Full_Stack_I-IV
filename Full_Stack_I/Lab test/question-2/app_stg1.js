const events = require('events');

const eventEmitter = new events.EventEmitter();
let numberOfRounds = 0;
let roundCounter = 0;

eventEmitter.on('pong', () => {
    console.log('pong...');
    eventEmitter.emit('ping');
});

eventEmitter.on('ping', () => {
    if(roundCounter >= numberOfRounds) {
        return;
    }
    roundCounter++;

    console.log('ping...');
    eventEmitter.emit('pong');
});

const playGame = (num) => {
    numberOfRounds = num;
    eventEmitter.emit('ping');    
}

playGame(3);