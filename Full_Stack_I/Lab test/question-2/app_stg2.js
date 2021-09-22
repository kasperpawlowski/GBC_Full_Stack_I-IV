const events = require('events');

const eventEmitter = new events.EventEmitter();
let numberOfRounds = 0;
let roundCounter = 0;

eventEmitter.on('pong', () => {
    console.log('pong..');

    setTimeout(() => {
        eventEmitter.emit('ping');
    }, 1000);
});

eventEmitter.on('ping', () => {
    if(roundCounter >= numberOfRounds) {
        console.log('game completed..');
        return;
    }
    roundCounter++;

    console.log(`Round ${roundCounter}`);
    console.log('ping..');

    setTimeout(() => {
        eventEmitter.emit('pong');
    }, 1000);
});

const playGame = (num) => {
    numberOfRounds = num;
    eventEmitter.emit('ping');    
}

playGame(3);